import React from 'react'
import Header from "./Header"
import ContestList from "./ContestsList"
import Contest from "./Contest"
import * as api from "../api"
import PropTypes, { string, any } from 'prop-types'
import { ObjectId } from 'mongodb';
import ReactDOM from 'react-dom'

const pushState = (obj: any, url: string) => window.history.pushState(obj,'',url)
const onPopState = (handler: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null) => { window.onpopstate = handler }

class App extends React.Component {
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }
    state = this.props.initialData
    componentDidMount() {
        onPopState((event) => {
            this.setState({
               currentContestId: (event.state || {}).currentContestId
            })
        })
    }
    componentWillUnmount() {
        onPopState(null)
    }
    fetchContest = (contestId: ObjectId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        )
        api.fetchContest(contestId).then((contest: any) => {
            this.setState({
                currentContestId: contest._id,
                contests: {
                    ...this.state.contests,
                    [contest._id]: contest
                }
            })
        })
    }
    fetchNames = (nameIds:ObjectId[]) => {
        if(nameIds.length===0) {
            return
        }
        api.fetchNames(nameIds)
            .then((names:string) => {
                this.setState({
                    names
                })
            })
    }
    fetchContestList = () => {
        pushState(
            {currentContestId: null},
            `/`
        )
        api.fetchContestList().then((contests:any) => {
            this.setState({
                currentContestId: null,
                contests
            })
        })
        
    }
    addName = (newName:string, contestId:ObjectId) => {
        api.addName(newName, contestId)
        .then((resp:any) => 
             this.setState({
                 contests: {
                     ...this.state.contests,
                     [resp.updatedContest._id]: resp.updatedContest
                 },
                 names: {
                     ...this.state.names,
                     [resp.newName._id]: resp.newName
                 }
             })   
        )
        .catch(console.error)
    }
    currentContest() {
        return this.state.contests[this.state.currentContestId]
    }
    pageHeader() {
        if( this.state.currentContestId) {
            return this.currentContest().contestName
        }
        return 'Naming Contests'
    }
    lookupName = (nameId:ObjectId) => {
        if(!this.state.names || !this.state.names[nameId]) {
            return {
                name: "..."
            }
        }
        return this.state.names[nameId]
    }
    currentContent() {   
        if(this.state.currentContestId) {
            return <Contest 
                    contestListClick={this.fetchContestList}
                    fetchNames = {this.fetchNames}
                    lookupName = {this.lookupName}
                    addName = {this.addName}
                    {...this.currentContest()} />
        }
        else
            return <ContestList 
                    onContestClick = {this.fetchContest}
                    contests = {this.state.contests} />

    }
    render() {
        console.log(this.state.contests)
        return (
            <div className="App">
               <Header message={this.pageHeader()}/>
               {this.currentContent()}
              
            </div>
        )
    }
}

export default App