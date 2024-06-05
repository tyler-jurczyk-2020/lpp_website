import { useState } from "react"

function Carousel({ imageSet }) {
    const [index, setIndex] = useState(0)
    console.log(imageSet)
    return (
        <div className="CarouselMain">
            <div className="CarouselNextWrapper">
                <p className="CarouselNext">&lt;</p>
            </div>
            <img className="CarouselImg" src={imageSet[index]} alt=""/> 
            <div className="CarouselPrevWrapper">
                <p className="CarouselPrev">&gt;</p>
            </div>
        </div>
    )
}

export default Carousel
