import React, { Component } from 'react'
import './App.css'
import ClassComponent, { AnotherComponent } from './components/learning-examples/ClassComponent'
import FunctionComponent from './components/learning-examples/FunctionComponent'
import Counter from './components/counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    )
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        App Component
        <ClassComponent />
        <AnotherComponent />
        <FunctionComponent />
      </div>
    )
  }
}
export default App;
