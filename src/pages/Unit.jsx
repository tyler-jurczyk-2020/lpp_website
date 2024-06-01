import Carousel from "../components/Carousel.jsx"

function Unit({ unitImages}) {
    return (
        <div>
            Image Carousel
            <Carousel imageSet={unitImages}/>  
        </div>
    )
}

export default Unit
