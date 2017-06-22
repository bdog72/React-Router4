import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldScholMenuLink activeOnlyWhenExact to='/' label='Home' />
      <OldScholMenuLink to='/about' label='About' />
      <hr />
      <Route exact path='/' component={Home} />
      <Route exact='/about' component={About} />
    </div>
  </Router>
)

const OldScholMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )} />
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
export default CustomLinkExample
