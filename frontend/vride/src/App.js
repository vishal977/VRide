//General imports.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';

//Component imports.
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import AuthContextProvider from './Contexts/AuthContext';
import CreateCarpool from './Components/CreateCarpool';
import SignUp from './Components/SignUp';
import MapsView from './Components/MapsView';


//Functional component - App
function App() {
  return (
    <Switch>
      <AuthContextProvider>
          <NavigationBar/>
          <Route exact path = "/" component = {HomePage}/>
          <Route path = "/home" component = {HomePage}/>
          <Route path = "/create" component = {CreateCarpool}/>
          <Route path = "/signup" component = {SignUp}/>
          <Route path = "/maps" component = {MapsView}/>
      </AuthContextProvider>
    </Switch>
  );
}

export default App;
