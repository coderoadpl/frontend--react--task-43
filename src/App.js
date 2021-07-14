import React from 'react'
import ErrorComponent from './ErrorComponent'

export class App extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError (error) {
    console.log('getDerivedStateFromError')

    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('componentDidCatch')

    console.log(error)
    console.log(info)
  }

  render () {
    console.log('render')

    return (
      <div>
        CodeRoad APP
        {
          this.state.hasError ?
            <h1>Error occurred</h1>
            :
            <ErrorComponent />
        }
      </div>
    )
  }
}

export default App
