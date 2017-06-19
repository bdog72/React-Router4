import React, { Component } from 'react'
import BasicExample1 from './Example1'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render () {
    return <div>
      <BasicExample />
    </div>
  }
}

export default App

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Example1</Link></li>
        <li><Link to='/ex2'>Example2</Link></li>
        <li><Link to='/ex3'>Example3</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Ex1} />
      <Route path='/ex2' component={Ex2} />
      <Route path='/ex3' component={Ex3} />
    </div>
  </Router>
)

const Ex1 = () => (
  <div>
    <BasicExample1 />
  </div>
)

const Ex2 = () => (
  <div>
    <h2>example 2</h2>
  </div>
)

const Ex3 = () => (
  <div>
    <h2>example 3</h2>
  </div>
)
