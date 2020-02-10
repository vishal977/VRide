import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
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
