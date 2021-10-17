import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Home } from './Containers/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './Containers/Login'

ReactDOM.render(
  <React.StrictMode>
    {/* provavelmente um menu */}
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
)
