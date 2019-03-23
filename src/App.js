import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
    <div>
      <div>
        <div className="bg-primary float-right">Div 1</div>
        <div className="bg-warning float-right">Div 2</div>
        <div className="float-right">Div 3</div>
      </div>
      <div class="mt-5 clearfix">
        <label className="bg-primary">Label 1</label>
        <label className="bg-warning">Label 2</label>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p class='mt-5'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>kalamo hehe app</p>
          <form>
            <div>
              What are you looking for?:
            </div>
            <div className = "mt-4 mb-4 ">
              <input type = "text" name = "name"/>
            </div>
            <div className="text-left">
              <input className = "btn btn-primary" type = "submit" value = "submit"/>
            </div>  
            </form>
        </header>
      </div>
    </div>
    );
  }
}

export default App;
