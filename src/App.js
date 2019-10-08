import React from 'react';
import friends from './friends.png';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <img src={friends} className="App-logo" alt="logo" />
        <div className="App-intro">
          <p className="pt-3">
            How well do you know the gang? 
          <br /> Let's find out!</p>
          <Button className="Begin-button" block>Begin ></Button>
        </div>
      </header>
    </div>
  );
}

export default App;
