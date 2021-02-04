import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from  "./components/Home/Home";
import SignIn from "./components/Auth/SignIn/SignIn";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/sign-in" component={SignIn}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
