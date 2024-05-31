import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Sidebar'>
                <div className='Logo'>Cool LPP Logo</div>
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
