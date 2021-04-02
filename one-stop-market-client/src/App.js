import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Headers from './components/Headers/Headers';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import CheckOut from './components/CheckOut/CheckOut';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';



export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser , setLoggedInUser]}>
    <Router>
      <Headers />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AddProduct />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path = "/checkOut/:name">
            <CheckOut />
          </PrivateRoute>
          <Route path = "/addProduct">
            <AddProduct />
          </Route>
          <Route path = "/manageProduct">
           <ManageProduct />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
