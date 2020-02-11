import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HomePage/>
    </div>
  );
}

export default App;
