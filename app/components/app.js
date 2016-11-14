import React from 'react'

var socket = io.connect('http://localhost:3000');
socket.on('hello', function (data) {
  console.log(data);
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
