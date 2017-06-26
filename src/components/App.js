import React, { Component } from 'react'
import BasicExample1 from './Example1'
import ParamsExample from './Example2'
import AuthExample from './Example3'
import CustomLinkExample from './Example4'
import PreventingTransitionsExample from './Example5'
import NoMatchExample from './Example6'
import SidebarExample from './Example7'
import { BrowserRouter as Router,
  Route, Link }
  from 'react-router-dom'

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
      <div className='routes'>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/ex1'>Example 1</Link></li>
          <li><Link to='/ex2'>Example 2</Link></li>
          <li><Link to='/ex3'>Example 3</Link></li>
          <li><Link to='/ex4'>Example 4</Link></li>
          <li><Link to='/ex5'>Example 5</Link></li>
          <li><Link to='/ex6'>Example 6</Link></li>
          <li><Link to='/ex7'>Example 7</Link></li>
        </ul>
      </div>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/ex1' component={Ex1} />
      <Route path='/ex2' component={Ex2} />
      <Route path='/ex3' component={Ex3} />
      <Route path='/ex4' component={Ex4} />
      <Route path='/ex5' component={Ex5} />
      <Route path='/ex6' component={Ex6} />
      <Route path='/ex7' component={Ex7} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1 className='homeHeader'>REACT ROUTER 4</h1>
  </div>
)

const Ex1 = () => (
  <div>
    <BasicExample1 />
  </div>
)

const Ex2 = () => (
  <div>
    <ParamsExample />
  </div>
)

const Ex3 = () => (
  <div>
    <AuthExample />
  </div>
)

const Ex4 = () => (
  <div>
    <CustomLinkExample />
  </div>
)

const Ex5 = () => (
  <div>
    <PreventingTransitionsExample />
  </div>
)

const Ex6 = () => (
  <div>
    <NoMatchExample />
  </div>
)

const Ex7 = () => (
  <div>
    <SidebarExample />
  </div>
)
