import React from 'react'
import { Link } from 'react-router'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="masthead">
          <div className="row">
            <div className="large-12-columns">
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chat">Chat</Link></li>
              </ul>
              <h1>chatta-box</h1>
              <p>Collaborate and work on projects, or talk with friends</p>
              <Link to="/chat" className="large inverted hollow button">Start a room</Link>
            </div>
          </div>
          <div className="icon-scroll-container">
            <div className="icon-scroll"></div>
          </div>
        </div>
        <main>
          <div className="row">
            <div className="large-12-columns">
              <h2><small>#</small>rooms</h2>
              <p> 
                <span className="room">politics</span>
                <span className="room">gifs</span>
                <span className="room">random</span>
                <span className="room">open source</span>
                <span className="room">art</span>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
