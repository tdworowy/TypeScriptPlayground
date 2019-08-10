import React from 'react';
import PropTypes from 'prop-types'
import { EventEmitter } from 'events';


interface IContestProps {
  _id: string,
  description: string,
  contestListClick: any,
  fetchNames: Function,
  nameIds: Array<string>,
  lookupName:Function,
  addName: Function
}

class Contest extends React.Component <IContestProps>{
  
  static propTypes = {
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contestListClick: PropTypes.func.isRequired,
    fetchNames: PropTypes.func.isRequired,
    nameIds: PropTypes.array.isRequired,
    lookupName:PropTypes.func.isRequired,
    addName: PropTypes.func.isRequired
  };
  
  
  componentDidMount() {
      console.log(this.props.nameIds)
      this.props.fetchNames(this.props.nameIds)
  }
  handleSubmit = (event:any) => {
    event.preventDefault()
    this.props.addName((this.refs.newNameInput as any).value, this.props._id)
    (this.refs.newNameInput as any).value = ""
  } 
  render() {
    return (
      <div className="Contest">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.nameIds.map(nameId =>
                <li key={nameId} className="list-group-item">{this.props.lookupName(nameId).name}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Propose a New Name</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text" 
                  ref="newNameInput"
                  placeholder="New Name Here..." 
                  className="form-control" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-info">Sumbit</button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="home-link link"
             onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}


export default Contest;
