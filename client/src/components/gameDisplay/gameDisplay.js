import React from 'react';

function GameDisplay () {
    const data = [
        {
            title: "Game1",
            released: "2001",
            image: "#",
            price: "$15.00"
        }
    ]



    return (
        <div>
            <h1>{data.title}</h1>
            <p>Released: {data.released}</p>
            <p>Price: {data.price}</p>
            <img src={data.image} alt="HELLO"></img>
        </div>
    );
}

export default GameDisplay;