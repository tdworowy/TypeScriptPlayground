import React from 'react'
//import axios from 'axios'
import Header from "./Header"
import ContestList from "./ContestsList"
import Contest from "./Contest"


const pushState = (obj, url) => window.history.pushState(obj,'',url)

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: this.props.initialContests
    }
    // componentDidMount() {
    //     console.log("Did Mount.")
    //     axios.get('/api/contests')
    //         .then(resp => {
    //             console.log("In promise.")
    //             console.log(resp)
    //             this.setState({
    //                 contests: resp.data.contests
    //             })
    //         })
    //         .catch(console.error)
        
    // }
    componentWillUnmount() {
        console.log("Will Unmount")
    }
    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        )
        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId: contestId
        })
    }
    currentContent() {   
        if(this.state.currentContestId) {
            return <Contest {...this.state.contests[this.state.currentContestId]} />
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
               <Header message={this.state.pageHeader}/>
               {this.currentContent()}
              
            </div>
        )
    }
}

export default App