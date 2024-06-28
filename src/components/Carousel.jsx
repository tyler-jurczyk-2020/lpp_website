import { useState } from "react"

function Carousel({ imageSet }) {
    const [index, setIndex] = useState(0)
    return (
        <div className="CarouselMain">
            <div className="CarouselNextWrapper" onClick={() => (index > 0) ? setIndex(index - 1) : _}>
                <p className="CarouselNext">&lt;</p>
            </div>
            <img className="CarouselImg" src={imageSet[index]} alt=""/> 
            <div className="CarouselPrevWrapper" onClick={() => setIndex(index + 1)}>
                <p className="CarouselPrev">&gt;</p>
            </div>
        </div>
    )
}

export default Carousel
