import { CONVERT, UPDATE } from '../constants/actionTypes'
import marked from '../lib/appMarked'

const editorText = `
# a header
## a sub header
This is a link: [google](www.google.com)
This is some inline code -> \`function madness() {return "AAAAAHHH!!!"}\`
This is more in depth code ->
\`\`\`\n
function madness(type) {
  \tif(type = "multiple-personalities") {
    \treturn "help us!"
  \t}
  \treturn "I'm crazy!"
  }\n
\`\`\`
- a list item
> Why blockquote
Logo: ![A Rondom Picture](https://picsum.photos/50/50/?image=1045 "Title")
**bolded text**`

const defaultState = {
  preview: {
    __html: marked(editorText)
  },
  editorText
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONVERT:
      const { preview } = action
      return {
        ...state, 
        preview
      }
    case UPDATE:
      const { editorText } = action
      return {
        ...state, 
        editorText
      }
    default:
    console.log(state)
      return state;
  }
};