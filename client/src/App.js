import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h1 className="text-center">TODO Lsit App</h1>
      </div>
      <List />
    </div>
  </div>
  );
}

export default App;
