import './App.css';
import Header from './components/Header';
import {useState, useEffect } from "react";
import Presentation from './components/Presentation';
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [elements, setElements] = useState([
    {href:'home', content: "Home", id: `home${1}`}, 
    {href:'aboutme', content: "About me", id:`aboutme${2}`}, 
    {href:'educations', content: "Education", id:`education${3}`}, 
    {href:'projects', content: "Projects", id:`projects${4}`},
    {href:'contact', content: "Contact", id: `contact${5}`}
  ]);

  const nav = elements.map(el => <li><a
        key={`${el.id}`}
        href={`#${el.href}`}
        data-observer
        id={`${el.id}`}
        className="nav-item">
        {el.content}
    </a></li>)

  return (
  <div className="App">
  <Header nav={nav}/>
      <Presentation/>
      <About/>
      <Education/>
      <Portfolio/>
      <Contact/>
  </div>
  );
}

export default App;
