import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Container will always run, thus it does not need to check for development or production
ReactDOM.render(<App/>, document.querySelector('#root'))