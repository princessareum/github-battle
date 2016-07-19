var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>Hello from MAIN!</div>
      {this.props.children}
    )
  }
});

module.exports = Main;
