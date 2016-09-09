var React=require('react');
//var ReactDOM=require('react-dom');

var CommentList=React.createClass({

  render: function () {
      return(
        <div>
        <h1>you are in comment list</h1>
        <h2>{this.props.data}</h2>

        //<Gc data={this.props.data} data1="i am from child"/>

        </div>
      )
  }
})

module.exports=CommentList;
