import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import AuthContextProvider from './Contexts/AuthContext';
import CarpoolContextProvider from './Contexts/CarpoolContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <CarpoolContextProvider>
          <NavigationBar></NavigationBar>
          <HomePage/>
        </CarpoolContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
