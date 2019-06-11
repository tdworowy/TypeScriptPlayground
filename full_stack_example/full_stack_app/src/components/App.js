import React from 'react'
import Header from "./Header"
import ContestList from "./ContestsList"
import Contest from "./Contest"
import * as api from "../api"
import PropTypes from 'prop-types'

const pushState = (obj, url) => window.history.pushState(obj,'',url)

class App extends React.Component {
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }
    state = this.props.initialData
    
    componentWillUnmount() {
        console.log("Will Unmount")
    }
    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        )
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            })
        })
        
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
    currentContent() {   
        if(this.state.currentContestId) {
            return <Contest {...this.currentContest()} />
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