import { useState } from "react";

function ExpandableDiv({ header, areaDescription, isConsecutiveBanner }) {
    const [toggleDiv, setToggleDiv] = useState("HideDiv")
    function ToggleDiv() {
        if (toggleDiv == "")
            setToggleDiv("HideDiv")
        else
            setToggleDiv("")
    }
    const expandableBanner = (isConsecutiveBanner) ? "ConsecutiveBanner" : "ExpandableBanner"
    return (
    <div>
        <div className={expandableBanner}>
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
