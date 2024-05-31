import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LppLogo from "../lpp_logo.png"

function Navbar() {
    const [visible, setVisible] = useState(false)
    const [cssSelection, setCssSelection] = useState('NavbarList')
    function changeListVisibility() {
        setVisible(!visible) 
    }
    useEffect(() => {
        if(visible)
            setCssSelection('NavbarListClicked')
        else
            setCssSelection('NavbarList')
    }, [visible])
    return(
        <div className='Navbar'>
            <div className='Sidebar'>
                <div className="LogoNav">
                    <img src={LppLogo} className="LppLogo"/>
                    <button onClick={changeListVisibility} className="Navigate">Navigate</button>
                </div> 
                <div className={cssSelection}>
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
