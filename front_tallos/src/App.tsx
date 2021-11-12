import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Groups from './components/Groups';
import Chat from './components/Chat';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/groups' component={Groups} exact />
        <Route path='/chat' component={Chat} exact />
      </Switch>
    </Router>
  );
};

export default App;
