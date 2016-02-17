import React from 'react'
import { Router, Link } from 'react-router'

var socket = io.connect('http://localhost:3000');
socket.on('hello', function (data) {
  console.log(data);
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <h1>chatta-box</h1>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="about" activeClassName="active">About</Link></li>
            <li><Link to="contact" activeClassName="active">Contact</Link></li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
