import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Containers
import Home from '../home/Home';
import About from '../imageDetails/ImageDetails';

// Components
import Menu from '../../components/menu/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/image-details/:id" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
