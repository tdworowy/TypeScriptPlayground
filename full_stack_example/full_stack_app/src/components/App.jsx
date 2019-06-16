import React from 'react';
import Header from "./Header";
import ContestList from "./ContestsList";
import Contest from "./Contest";
import * as api from "../api";
import PropTypes from 'prop-types';
const pushState = (obj, url) => window.history.pushState(obj, '', url);
const onPopState = (handler) => { window.onpopstate = handler; };
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = this.props.initialData;
        this.fetchContest = (contestId) => {
            pushState({ currentContestId: contestId }, `/contest/${contestId}`);
            api.fetchContest(contestId).then((contest) => {
                this.setState({
                    currentContestId: contest._id,
                    contests: Object.assign({}, this.state.contests, { [contest._id]: contest })
                });
            });
        };
        this.fetchNames = (nameIds) => {
            if (nameIds.length === 0) {
                return;
            }
            api.fetchNames(nameIds)
                .then((names) => {
                this.setState({
                    names
                });
            });
        };
        this.fetchContestList = () => {
            pushState({ currentContestId: null }, `/`);
            api.fetchContestList().then((contests) => {
                this.setState({
                    currentContestId: null,
                    contests
                });
            });
        };
        this.addName = (newName, contestId) => {
            api.addName(newName, contestId)
                .then((resp) => this.setState({
                contests: Object.assign({}, this.state.contests, { [resp.updatedContest._id]: resp.updatedContest }),
                names: Object.assign({}, this.state.names, { [resp.newName._id]: resp.newName })
            }))
                .catch(console.error);
        };
        this.lookupName = (nameId) => {
            if (!this.state.names || !this.state.names[nameId]) {
                return {
                    name: "..."
                };
            }
            return this.state.names[nameId];
        };
    }
    componentDidMount() {
        onPopState((event) => {
            this.setState({
                currentContestId: (event.state || {}).currentContestId
            });
        });
    }
    componentWillUnmount() {
        onPopState(null);
    }
    currentContest() {
        return this.state.contests[this.state.currentContestId];
    }
    pageHeader() {
        if (this.state.currentContestId) {
            return this.currentContest().contestName;
        }
        return 'Naming Contests';
    }
    currentContent() {
        if (this.state.currentContestId) {
            return <Contest contestListClick={this.fetchContestList} fetchNames={this.fetchNames} lookupName={this.lookupName} addName={this.addName} {...this.currentContest()}/>;
        }
        else
            return <ContestList onContestClick={this.fetchContest} contests={this.state.contests}/>;
    }
    render() {
        console.log(this.state.contests);
        return (<div className="App">
               <Header message={this.pageHeader()}/>
               {this.currentContent()}
              
            </div>);
    }
}
App.propTypes = {
    initialData: PropTypes.object.isRequired
};
export default App;
