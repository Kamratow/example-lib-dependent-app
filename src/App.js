import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button,  TextInput } from '../node_modules/example-lib-app/dist/index'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <TextInput value="Working!" label="My label" />
      </div>
    );
  }
}

export default App;
