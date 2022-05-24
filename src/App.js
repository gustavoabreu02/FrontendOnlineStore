import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Search from './components/Search';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Search }/>
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
