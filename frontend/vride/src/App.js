import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import AuthContextProvider from './Contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
          <NavigationBar></NavigationBar>
          <HomePage/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
