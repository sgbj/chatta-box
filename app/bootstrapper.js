import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/app'
import Index from './components/index'
import Chat from './components/chat'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Index} />
      <Route path="chat" component={Chat} />
    </Route>
  </Router>
), document.getElementById('app'));
