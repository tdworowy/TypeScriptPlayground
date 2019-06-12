import React from 'react'
import PropTypes from 'prop-types'

class Contest extends React.Component {
    render() {
        return  <div className="Contest">
                    <div className="contest-description">
                        {this.props.description}
                    </div>
                    <div className="home-link link" 
                         onClick={this.props.contestListClick}>
                        Contest list
                    </div>                   

                </div>
    }
}
Contest.propTypes = {
    description: PropTypes.string,
  }

export default Contest