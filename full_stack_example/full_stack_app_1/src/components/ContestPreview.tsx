import React from "react";
import PropTypes from "prop-types";
import { ObjectId } from "mongodb";

interface IContestPreviewProps {
  onClick: Function;
  _id?: ObjectId;
  contestName?: string;
  categoryName?: string;
}

class ContestPreview extends React.Component<IContestPreviewProps> {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  handleClick = () => {
    this.props.onClick(this.props._id);
    console.log(this.props.contestName);
  };
  render() {
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
        <div className="category-name">{this.props.categoryName}</div>
        <div className="contest-name">{this.props.contestName}</div>
      </div>
    );
  }
}
export default ContestPreview;
