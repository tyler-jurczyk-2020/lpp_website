import { Link, Outlet } from "react-router-dom";
import LppLogo from "../lpp_logo.png"

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Sidebar'>
                <img src={LppLogo} className="LppLogo"/>
                <div className='NavbarList'>
                    <Link className='NavbarEntry' to='/'>Home</Link> 
                    <Link className='NavbarEntry' to='/about'>About</Link>
                    <Link className='NavbarEntry' to='/ashland'>Building</Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Navbar
