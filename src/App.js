import React, { Component } from 'react'
import './App.css'
import Main from './layout/Main'
import Foot from './layout/Foot'
import Menu from './layout/Menu'
import LayoutCom from './layout'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <LayoutCom />
      </div>
    )
  }
}

export default App
