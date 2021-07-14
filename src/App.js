import React from 'react'
import ErrorComponent from './ErrorComponent'

export class App extends React.Component {
  componentDidCatch (error, info) {
    console.log(error)
    console.log(info)
  }

  render () {
    return (
      <div>
        CodeRoad APP
        <ErrorComponent />
      </div>
    )
  }
}

export default App
