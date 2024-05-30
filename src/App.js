import './App.css';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
