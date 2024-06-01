import './App.css';
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Building from './pages/Building.jsx'
import Properties from './pages/Properties.jsx'
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
            <Route path="/properties" element={<Properties/>}/>
        </Routes>
    </div>
  );
}

export default App;
