import { useState } from "react";

function ExpandableDiv({ header, areaDescription }) {
    const [toggleDiv, setToggleDiv] = useState("HideDiv")
    function ToggleDiv() {
        if (toggleDiv == "")
            setToggleDiv("HideDiv")
        else
            setToggleDiv("")
    }
    return (
    <div>
        <div className="ExpandableBanner">
            <div className="ExpandButtonDiv">
                <button className="ExpandButton" onClick={ToggleDiv}>+</button>
            </div>
            <p className="LocalArea">{header}</p>
        </div>
        <div className="BannerBody">
            <p className={toggleDiv}>{areaDescription}</p>
        </div>
    </div>
    )
}

export default ExpandableDiv
