import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return(
        <div className='Navbar'>
            <Link to='/'>Home</Link> 
            <Link to='/about'>About</Link>
            <Outlet/>
        </div>
    );
}

export default Navbar
