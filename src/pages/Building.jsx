import { useState } from "react";
import Card from "../components/Card";

function Building({ address, thumbnails, areaDescription }) {
    const [toggleDiv, setToggleDiv] = useState("HideDiv")
    function ToggleDiv() {
        if(toggleDiv == "")
            setToggleDiv("HideDiv")
        else
            setToggleDiv("")
    }
    return(
        <div>
            <p className="BuildingAddy">{address}</p>
            <div className="Floors">
                <div className="FloorsCards">
                <Card cardClass="Ashland" image={thumbnails[0]} target="/ashland/firstfloor" 
                      title="First Floor Duplex 2 Bed 1 Bath" description="It will cost your kidney to live here"/>
                </div>
                <div className="FloorsCards">
                <Card cardClass="Ashland" image={thumbnails[1]} target="/ashland/secondfloor"
                      title="Second Floor 2 Bed 1 Bath" description="Party central"/>
                </div>
                <div className="FloorsCards">
                <Card cardClass="Ashland" image={thumbnails[2]} target="/ashland/thirdfloor"
                      title="Third Floor 2 Bed 1 Bath" description="Dishwasher is crashing out hard"/>
                </div>
            </div>
            <div>
                <div className="ExpandableBanner">
                    <div className="ExpandButtonDiv">
                        <button className="ExpandButton" onClick={ToggleDiv}>+</button>
                    </div>
                    <p className="LocalArea">Local Area</p>
                </div>
                <div className="BannerBody">
                    <p className={toggleDiv}>{areaDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default Building
