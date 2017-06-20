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
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/ex1'>Example1</Link></li>
        <li><Link to='/ex3'>Example2</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/ex1' component={Ex1} />
      <Route path='/ex3' component={Ex3} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1>REACT ROUTER 4</h1>
  </div>
)

const Ex1 = () => (
  <div>
    <BasicExample1 />
  </div>
)

const Ex3 = () => (
  <div>
    <h2>example 2</h2>
  </div>
)
