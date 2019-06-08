import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from "./Header"


class App extends React.Component {
    
    state = {
        pageHeader: "Naming Contests"
    }
    componentDidMount() {
        console.log("Did Mount")
    }
    componentWillUnmount() {
        console.log("Will Unmount")
    }
    render() {
        return (
            <div className="App">
               <Header message={this.state.pageHeader}/>
                <div>
                    ...
                </div>
            </div>
        )
    }
}

// const App = () => { // Statless function
//     return (
//         <div className="App">
//            <Header message="Naming Contests"/>
//             <div>
//                 ...
//             </div>
//         </div>
//     )
// }

export default App