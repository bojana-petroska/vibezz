'use client'
import React from "react"
import '../styles.css/components.css'

const RandomImage = () => {
    const randomUrl = `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/200/300`;
    console.log(randomUrl);

    return (
        <div className="random-image-container">
            <img 
            src={randomUrl} 
            alt='random url'
            className="random-image"
            />
        </div>
    )
}

export default RandomImage;

