import ReactDOM from "react-dom";
import React from 'react'
import {Valine,modify_hljs} from './react-valine'
import App from './App'


modify_hljs(function(hljs){
  const python = require('highlight.js/lib/languages/python');
  hljs.registerLanguage('python', python);
  return hljs
})

ReactDOM.render(
  <Valine  appId={"I5DAxOhp2kPXkbj9VXPyKoEB-gzGzoHsz"}
           appKey={"lGPcHd7GL9nYKqBbNEkgXKjX"}
    // requireEmail={true}
    // lang={"en"}
           canBeModify={true}
           placeholder={"Try“:” to input emoji"}
           nest={true}
           CommentClass={'Comment'}
  >
    <App />
  </Valine>, document.getElementById('root'));