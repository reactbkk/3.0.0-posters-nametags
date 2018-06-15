import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './design'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { renderAllSpeakersPoster, renderSpeakerPoster } from './spaker-poster'
import { renderAllNameTags, renderIndexedNameTag } from './attendee-tag'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={renderHome} />
        <Route exact path="/speakers" render={renderAllSpeakersPoster} />
        <Route exact path="/attendees" render={renderAllNameTags} />
        <Route exact path="/attendees/:index" render={renderIndexedNameTag} />
        <Route path="/:key" render={renderSpeakerPoster} />
      </Switch>
    </Router>
  )
}

function renderHome() {
  return (
    <ul>
      <Link to="/speakers">Speaker posters</Link>
      <Link to="/attendees">Attendees name tags</Link>
    </ul>
  )
}

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'))
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept(() => {})
  }
}
