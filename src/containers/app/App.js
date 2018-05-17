import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from '../home/Home';
import About from '../imageDetails/ImageDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/image-details/:id" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
