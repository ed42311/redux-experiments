import { CONVERT, UPDATE } from '../constants/actionTypes'
import marked from '../lib/appMarked'

export const convertAction = (text) => {
  return {
    type: CONVERT,
    preview: {__html: marked(text)}
  }
}

export const updateAction = (text) => {
  return {
    type: UPDATE,
    editorText: text
  }
}