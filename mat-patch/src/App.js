import React from 'react';
import './App.css';

function App() {

  const mobileNavHandler = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (    

    <div className="App">
      <header className="App-header">
        
          <div className="topnav" id="myTopnav">
            <a href="#section_1" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" 
              className="icon" 
              onClick={ () => mobileNavHandler() }>
              <i className="fa fa-bars"></i>
            </a>
          </div>
      </header>
      <div className="body">
        <div id="section_1">
          <div className="overlay">

          </div>
        </div> 
        <div id="section_2">
          <div className="overlay"> 
          
          </div> 
        </div> 
        <div id="section_3">
          <div className="overlay">
          
          </div> 
        </div> 
        <div id="section_4">
          <div className="overlay">
          
          </div> 
        </div> 
        <div id="section_5">
          <div className="overlay">
          
          </div> 
        </div> 
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
