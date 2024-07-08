import ExpandableDiv from "../components/ExpandableDiv.jsx"
import Carousel from "../components/Carousel.jsx"

function toImages(floor_glob) {
    let floor_images = []
    for(const img in floor_glob) {
        floor_images.push(img)
    }
    return floor_images
}

function Unit({ location, floor }) {
    let floor_glob, floor_images
    if(location != undefined) {
        switch(location) {
            case "ashland":
                switch(floor) {
                    case "first":
                        floor_glob = import.meta.glob('/public/ashland/firstfloor/*.jpg')
                        break
                    case "second":
                        floor_glob = import.meta.glob('/public/ashland/secondfloor/*.jpg')
                        break
                    case "third":
                        floor_glob = import.meta.glob('/public/ashland/thirdfloor/*.jpg')
                        break
                    default:
                        floor_glob = null
                        break
                }
                break
            default: 
                floor_glob = null
                break
        }
        if(floor_glob != undefined) {
            floor_images = toImages(floor_glob)
        }
    }
    else {
        floor_images = []
    }
    return (
        <div>
            Image Carousel
            <Carousel imageSet={floor_images}/>  
            <ExpandableDiv header="Unit Description" areaDescription="It's a pretty cool place to live"/>
             <div>
                <div className="ConsecutiveBanner">
                    <p className="LocalArea">Amenities</p>
                </div>
                <div className="BannerBody">
                    <p>Some cool amenities cards will go here</p>
                </div>
            </div>
        </div>
    )
}

export default Unit
