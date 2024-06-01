import { Link } from "react-router-dom"

function Card({ cardClass, image, title, description}) {
    return(
        <Link className="RemoveDecoration" to="/ashland">
            <div className={cardClass + "Card"}>
                    <img src={image} alt="" className={cardClass + "Image"}/>
                    <div className={cardClass + "Desc"}>
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
            </div>
        </Link>
    )
}

export default Card
