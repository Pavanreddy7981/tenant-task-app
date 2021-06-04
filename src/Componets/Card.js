import React from 'react'
import "./Card.css"

const Card = ({src , title}) => {
    return (
        <div className="card">
            <img src={src} />
            <p>{title}</p>
        </div>
    )
}

export default Card
