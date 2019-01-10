import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  withRouter
} from 'react-router-dom'

// Import Components
import ViewHeader from '../components/ViewHeader'

// Import Actions
import { updateAction, convertAction } from '../actions'

// Import stylesheets
import './MarkdownPreviewer.scss'

class MarkdownPreviewer extends Component {
  onChange = (e) => {
    this.props.updateNewInput(e.target.value)
    this.props.convertInput(e.target.value)
  }

  render () {
    return (
      <div className="MarkdownPreviewer_MainDiv">
        <ViewHeader title="Markdown Previewer" />
        <form className="MarkdownPreviewer_Form">
          <h3>From Here</h3>
          <textarea 
           id='editor'
           value={this.props.editorText}
           onChange={this.onChange}
           style={{border: '2px solid black'}}
          >
          </textarea>
        </form>
        <div 
          id="preview" 
          dangerouslySetInnerHTML={this.props.preview} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    editorText: state.editorText,
    preview: state.preview
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    convertInput: (newMessage) => {
       dispatch(convertAction(newMessage))
    },
    updateNewInput: (newInput) => {
      dispatch(updateAction(newInput))
   }
  }
};

MarkdownPreviewer.propTypes = {
  editorText: PropTypes.string.isRequired,
  preview: PropTypes.object.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer));