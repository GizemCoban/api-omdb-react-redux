import React from 'react';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.css';

import Home from './component/Home';
import MoviesDetail from "./component/MoviesDetail"


const history = createBrowserHistory();

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
          <Router history={history}>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/detail/:imdbID" component={MoviesDetail} /> 
          </Router>
      </div>
    );
  }
  
  }
  
export default App;