import React from "react"
import ReactDOM from "react-dom"

function App() {
  return (
    <div className="app">
      <h1>Budgeteer</h1>
      <p>dis be a cool ding dong DING DONG</p>
    </div>
  )
}

export default App

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"))
}