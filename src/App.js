import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Translate from "./translate/translation"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state
    return (
      <div>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "ignore"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "these"}</button>
        <br />
        <span>{msg}</span>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Fluent Phrase Translation.
          </p>
          <LambdaDemo />
        </header>
        <Translate/>
      </div>
    )
  }
}

export default App
