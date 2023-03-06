import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from './components/home';
import services from './components/services';
import aboutus from './components/aboutus';
import contactus from './components/contactus';
import videos from './components/videos';
import React, { Component } from 'react';
class navbar extends Component{
  render(){
    return(
      <BrowserRouter>
      <ul>
        <li>
          <link to='/home'>home</link>
        </li>
      </ul>
      <ul>
        <li>
          <link to='/services'>services</link>
        </li>
      </ul>
      <ul>
        <li>
          <link to='/aboutus'>aboutus</link>
        </li>
      </ul>
      <ul>
        <li>
          <link to='/contactus'>contactus</link>
        </li>
      </ul>
      <ul>
        <li>
          <link to='/videos'>videos</link>
        </li>
      </ul>
      <ul>
        <li>
          <link to='/navbar'>navbar</link>
        </li>
      </ul>
      <Routes>
        <Route path='/' elements={<home/>}/>
        <Route path='/services' elements={<services/>}/>
        <Route path='/aboutus' elements={<aboutus/>}/>
        <Route path='/contactus' elements={<contactus/>}/>
        <Route path='/videos' elements={<videos/>}/>
        <Route path='/navbar' elements={<navbar/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
function App() {
  return (
    <div className="App">
      <home/>
      <aboutus/>
      <contactus/>
      <videos/>
      <services/>
      <navbar/>
    </div>
  );
}

export default App;
