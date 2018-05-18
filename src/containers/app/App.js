import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


// Containers
import Home from '../home/Home';
import About from '../imageDetails/ImageDetails';

// Components
import Menu from '../../components/menu/Menu';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';

// Style
import './app.scss';

const App = () => (
  <Router>
    <div className="main-wrapper">
      <ErrorBoundary>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/image-details/:id/:secret" component={About} />
      </ErrorBoundary >
    </div>
  </Router>
);


export default App;
