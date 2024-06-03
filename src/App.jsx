import './App.css';
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Building from './pages/Building.jsx'
import Properties from './pages/Properties.jsx'
import { Routes, Route } from 'react-router-dom';

import AshlandOne from '/ashland/firstfloor/A42.jpg'
import AshlandTwo from '/ashland/secondfloor/thumbnail.jpg'
import AshlandThree from '/ashland/firstfloor/A42.jpg'
import { useState } from 'react';

function App() {
  const ashland_thumbnails = [AshlandOne, AshlandTwo, AshlandThree]
  const [overlayDisplay, setOverlayDisplay] = useState("none")
  function updateOverlay() {
    if(overlayDisplay == "none") {
      setOverlayDisplay("inline")
    }
    else {
      setTimeout(() => setOverlayDisplay("none"), 1000)
    }
  }
  return (
    <div className="App">
        <div className="OverlayShadow" style={{display: overlayDisplay}}/>
        <div className="Sidebar">
            <Navbar overlayFunc={updateOverlay}/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/ashland" element={<Building address="3810 N Ashland Ave" location="ashland" thumbnails={ashland_thumbnails} 
                areaDescription="Located just a few blocks/steps from Southport Corridor shopping and restaurants. Located in the highly sought after Blaine School district & very close to all public transportations, including the Southport 'L' or & Paulina/Lincoln 'L'. Minutes/walking distance to Trader Joe's, Wrigley Field, countless bars & restaurants."/>}/>
        </Routes>
    </div>
  );
}

export default App;
