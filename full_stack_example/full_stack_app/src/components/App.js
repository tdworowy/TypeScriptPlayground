import React from 'react'
//import axios from 'axios'
import Header from "./Header"
import ContestPreview from './ContestPreview'


class App extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

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
    render() {
        console.log(this.state.contests)
        return (
            <div className="App">
               <Header message={this.state.pageHeader}/>
                <div>
                 {this.state.contests.map(contest =>
                    <ContestPreview key={contest.id} {...contest}/>
                    )}
                </div>
            </div>
        )
    }
}

export default App