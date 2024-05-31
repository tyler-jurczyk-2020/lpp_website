import './App.css';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Building from './pages/Building.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="Sidebar">
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/ashland" element={<Building address="3810 N Ashland Ave"/>}/>
        </Routes>
    </div>
  );
}

export default App;
