//React and CSS Imports.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Component imports.
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import AuthContextProvider from './Contexts/AuthContext';
import CreateCarpool from './Components/CreateCarpool';
import SignUp from './Components/SignUp';


//Functional component - App
function App() {
  return (
    <Router>
      <AuthContextProvider>
          <NavigationBar/>
          <Route exact path = "/" component = {HomePage}/>
          <Route path = "/home" component = {HomePage}/>
          <Route exact path = "/create" component = {CreateCarpool}/>
          <Route exact path = "/signup" component = {SignUp}/>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
