import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Home } from './Containers/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './Containers/Login'
import { PrivateRoute } from './Components/PrivateRoute'

ReactDOM.render(
  <React.StrictMode>
    {/* provavelmente um menu */}
    <Router>
      <Switch>
        <PrivateRoute path='/home'>
          <Home />
        </PrivateRoute>
        <Route exact path='*' component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
)
