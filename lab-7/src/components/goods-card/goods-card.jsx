import React from "react";
import "./goods-card.css";

function GoodsCard({src, name, price}) {
    return (
        <div className="good">
            <img src={src} alt={name}/>
            <div className="text-wrap">
                <p>{name}</p>
                <p>{price} EUR</p>
            </div>
        </div>
    )
}

export default GoodsCard;
