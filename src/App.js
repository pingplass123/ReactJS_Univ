import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Post from './components/Post';
import Register from './components/Register';
// import AdminRoute from './route/AdminRoute';
import Home from './components/Home';
import UserRoute from './route/UserRoute';
import category from './components/TestCategory';
import Main from './screen/Main';
import NotFound from './components/NotFound';

function App() {  

  return (
      
      <Router>
        <Switch>

          {/* Public Route for user dose't login */}
          <Route exact path="/" component={Main} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Home} />
          {/* <Route path="/category" component={category}/> */}

          {/* Protect Route for login */}
          <UserRoute path="/timeline/:sub_name" component={Post} />

          {/* NotFound page  */}
          <Route path="" component={NotFound} />

        </Switch>
      </Router>
    
  );
}

export default App;