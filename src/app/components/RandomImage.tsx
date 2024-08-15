'use client'
import React from "react"

const RandomImage = () => {
    const randomUrl = `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/200/300`;
    console.log(randomUrl);

    return (
        <div>
            <img src={randomUrl} alt='random url'/>
        </div>
    )
}

export default RandomImage;

