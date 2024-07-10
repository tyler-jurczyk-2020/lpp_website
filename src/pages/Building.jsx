import ExpandableDiv from "../components/ExpandableDiv";
import Card from "../components/Card";

function toImages(floor_glob) {
    let floor_images = []
    for(const img in floor_glob) {
        floor_images.push(img)
    }
    return floor_images
}

function Building({ address, buildingType, thumbnails, areaDescription, buildingDescription, titles, availability }) {
    const avail_text = availability.map(x => x ? "Available" : "Unavailable")
    let exterior_glob, exterior_images
    if(buildingType != undefined) {
        switch(buildingType) {
            case "ashland":
                exterior_glob = import.meta.glob('/public/ashland/*.jpg') 
                break
            default: 
                exterior_glob = null
                break
        }
        if(exterior_glob != undefined) {
            exterior_images = toImages(exterior_glob)
        }
    }
    else {
        exterior_images = []
    }
    return (
        <div>
            <p className="BuildingAddy">{address}</p>
            <div>
                <div className="ExpandableBanner">
                    <p className="LocalArea">About Property</p>
                </div>
                <div className="BannerBody" style={{borderBottomStyle : "none"}}>
                    <p>{buildingDescription}</p>
                    <div> 
                        <img alt="" src={exterior_images[0]} style={{height : "500px"}}/>
                    </div>
                </div>
            </div>
            <div className="Units">
                <p className="LocalArea">Units</p>
                <div className="Floors">

                    <div className="CardFloor">
                        <p className="FloorNumber">First Floor</p>
                        <div className="FloorsCards">
                            <Card cardClass="Unit" image={thumbnails[0]} target="/ashland/firstfloor"
                                title={titles[0]} description={avail_text[0]} />
                        </div>
                    </div>

                    <div className="CardFloor">

                        <p className="FloorNumber">Second Floor</p>
                        <div className="FloorsCards">
                            <Card cardClass="Unit" image={thumbnails[1]} target="/ashland/secondfloor"
                                title={titles[1]} description={avail_text[1]} />
                        </div>
                    </div>

                    <div className="CardFloor">
                        <p className="FloorNumber">Third Floor</p>
                        <div className="FloorsCards">
                            <Card cardClass="Unit" image={thumbnails[2]} target="/ashland/thirdfloor"
                                title={titles[2]} description={avail_text[2]} />
                        </div>
                    </div>
                </div>
            </div>
            <ExpandableDiv header="Local Area" areaDescription={areaDescription} isConsecutiveBanner={false}/>
        </div>
    );
}

export default Building
