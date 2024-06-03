import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LppLogo from "/lpp_logo.png"
import SidebarIcon from "/sidebar_icon.png"

function Navbar() {
    const [visible, setVisible] = useState(false)
    const [cssSelection, setCssSelection] = useState('NavbarList')
    const [overlayAlpha, setOverlayAlpha] = useState("rgba(0, 0, 0, 0)")
    const [overlayPointer, setOverlayPointer] = useState("auto")

    function updateOverlay() {
        if(overlayAlpha == "rgba(0, 0, 0, 0)") {
            setOverlayAlpha("rgba(0, 0, 0, 0.5)")
            setOverlayPointer("auto")
        }
        else {
            setOverlayAlpha("rgba(0, 0, 0, 0)")
            setOverlayPointer("none")
        }
    }

    function changeListVisibility() {
        setVisible(!visible) 
        updateOverlay()
    }

    function handleOverlayClick() {
        if(overlayAlpha == "rgba(0, 0, 0, 0.5)")
            changeListVisibility()
    }

    useEffect(() => {
        if(visible) {
            setCssSelection('NavbarListClicked')
        }
        else {
            setCssSelection('NavbarList')
        }
    }, [visible])
    return(
        <div>
            <div className="OverlayShadow" onClick={handleOverlayClick} style={{backgroundColor: overlayAlpha, pointerEvents: overlayPointer}}/>
            <div className='Navbar'>
                <div className='Sidebar'>
                    <div className="LogoNav">
                        <div className="AlignButton">
                            <button onClick={changeListVisibility} className="SidebarButton">
                                <img src={SidebarIcon} alt="" className="SidebarIcon"/>
                            </button>
                        </div>
                        <div className={cssSelection}>
                            <Link className='NavbarEntry' to='/'>Home</Link> 
                            <Link className='NavbarEntry' to='/about'>About</Link>
                            <Link className='NavbarEntry' to='/properties'>Properties</Link>
                        </div>
                    </div> 
                    <img src={LppLogo} alt="" className="LppLogo"/>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Navbar
