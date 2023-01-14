import React from "react";
import GoodsCard from "../goods-card/goods-card";
import "./goods.css";

const goods = [
    {src: "./images/1.jpg", name: "Azia 110", price: 675},
    {src: "./images/2.jpg", name: "Saeda Sandal 100", price: 895},
    {src: "./images/3.jpg", name: "Aveline 100", price: 850},
    {src: "./images/4.jpg", name: "Aveline 100", price: 850},
    {src: "./images/5.jpg", name: "Saeda Sandal 100", price: 895},
    {src: "./images/6.jpg", name: "Aurelie 85", price: 695}
]

function Goods() {
    return(
        <div className="container">
            {goods.map(good => <GoodsCard src={good.src} name={good.name} price={good.price}/>)}
        </div>
    )
}

export default Goods;
