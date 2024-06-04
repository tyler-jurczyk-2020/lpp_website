import { Link } from "react-router-dom"

function Card({ cardClass, image, title, description, target }) {
    return(
        <Link className="RemoveDecoration" to={target}>
            <div className={cardClass + "Card"}>
                    <img src={image} alt="" className={cardClass + "Image"}/>
                    <div className={cardClass + "Desc"}>
                        <p className={cardClass + "Title"}>{title}</p>
                        <p>{description}</p>
                    </div>
            </div>
        </Link>
    )
}

export default Card
