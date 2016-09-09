var React=require('react');
var ReactDOM=require('react-dom');
var CommentList = require("./component/CommentList.js")
var CommentForm = require("./component/CommentForm.js")


var CommentBox=React.createClass({

  render: function () {
      return(
        <div>
        <h1>I am  CommentBox</h1>
        <CommentList/>
        <CommentForm/>

        </div>

      )
  }
});

ReactDOM.render(<CommentBox/>, document.getElementById('app2'));
