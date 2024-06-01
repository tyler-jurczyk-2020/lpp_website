import { useState } from "react"

function Carousel({ imageSet }) {
    const [index, setIndex] = useState(0)
    console.log(imageSet)
    return (
        <div>
            <img src={imageSet[index]} alt=""/> 
        </div>
    )
}

export default Carousel
