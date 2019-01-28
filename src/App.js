import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const routes = [

    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home<h2>
  ,
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/bubblegum'>Bubblegum</Link>
              </li>
              <li>
                <Link to='/shoelaces'>ShoeLaces</Link>
              </li>
            </ul>
          </div>

      {routes.map((route, index) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.sidebar} />
      ))}

          <hr />

        </div>
      </Router>
    )
  }
}

export default App
