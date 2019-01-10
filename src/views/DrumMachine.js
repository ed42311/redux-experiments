import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  withRouter
} from 'react-router-dom'

class DrumMachine extends Component {
  render () {
    return (
      <div className="DrumMachine_MainDiv">
        <h2>
          Drum Machine
        </h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  
  }
};

DrumMachine.propTypes = {

}

export default withRouter(connect(null, null)(DrumMachine));