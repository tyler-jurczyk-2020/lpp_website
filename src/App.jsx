import './App.css';
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Building from './pages/Building.jsx'
import Properties from './pages/Properties.jsx'
import Unit from './pages/Unit.jsx';
import { Routes, Route } from 'react-router-dom';

import AshlandOne from '/ashland/firstfloor/A42.jpg'
import AshlandTwo from '/ashland/secondfloor/thumbnail.jpg'
import AshlandThree from '/ashland/firstfloor/A42.jpg'

function App() {
  const ashland_thumbnails = [AshlandOne, AshlandTwo, AshlandThree]
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/ashland" element={<Building address="3810 N Ashland Ave" location="ashland" thumbnails={ashland_thumbnails} 
                areaDescription="Located just a few blocks/steps from Southport Corridor shopping and restaurants. Located in the highly sought after Blaine School district & very close to all public transportations, including the Southport 'L' or & Paulina/Lincoln 'L'. Minutes/walking distance to Trader Joe's, Wrigley Field, countless bars & restaurants."
                buildingDescription="Built in 19XX and located in the coveted Y Neighborhood on the Near Northside, 3810 N Ashland boasts a red brick exterior with a 2 car garage located in the alley." titles={["Duplex 4 Bed 2 Bath", "2 Bed 1 Bath", "2 Bed 1 Bath"]}
                availability={[false, false, false]} buildingType="ashland"/>}/>
            <Route path="/ashland/firstfloor" element={<Unit location="ashland" floor="first"/>}/>
        </Routes>
    </div>
  );
}

export default App;
