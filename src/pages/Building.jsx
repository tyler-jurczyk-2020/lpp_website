import { useState } from "react";
import Card from "../components/Card";

function Building({ address, thumbnails, areaDescription }) {
    const [toggleDiv, setToggleDiv] = useState("HideDiv")
    function ToggleDiv() {
        if (toggleDiv == "")
            setToggleDiv("HideDiv")
        else
            setToggleDiv("")
    }
    return (
        <div>
            <p className="BuildingAddy">{address}</p>
            <div className="Units">
                <p className="LocalArea">Units</p>
                <div className="Floors">

                    <div className="CardFloor">
                        <p className="FloorNumber">First Floor</p>
                        <div className="FloorsCards">
                            <Card cardClass="Unit" image={thumbnails[0]} target="/ashland/firstfloor"
                                title="Duplex 2 Bed 1 Bath" description="Available July 1st" />
                        </div>
                    </div>

                    <div className="CardFloor">

                        <p className="FloorNumber">Second Floor</p>
                        <div className="FloorsCards">
                            <Card cardClass="Unit" image={thumbnails[1]} target="/ashland/secondfloor"
                                title="2 Bed 1 Bath" description="Unavailable" />
                        </div>
                    </div>

                    <div className="CardFloor">
                        <p className="FloorNumber">Third Floor</p>
                        <div className="FloorsCards">
                            <Card cardClass="Unit" image={thumbnails[2]} target="/ashland/thirdfloor"
                                title="2 Bed 1 Bath" description="Unavailable" />
                        </div>
                    </div>

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
