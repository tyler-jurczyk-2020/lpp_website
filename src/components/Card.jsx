function Card({ cardClass, image, title, description}) {
    return(
        <div className={cardClass + "Card"}>
            <img src={image} alt="" className={cardClass + "Image"}/>
            <div className={cardClass + "Desc"}>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
