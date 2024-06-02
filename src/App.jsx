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

function App() {
  const ashland_thumbnails = [AshlandOne, AshlandTwo, AshlandThree]
  return (
    <div className="App">
        <div className="Sidebar">
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/ashland" element={<Building address="3810 N Ashland Ave" location="ashland" thumbnails={ashland_thumbnails} />}/>
        </Routes>
    </div>
  );
}

export default App;
