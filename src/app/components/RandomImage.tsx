'use client'
import React from "react"

const RandomImage = () => {
    const randomUrl = `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/200/300`;
    console.log(randomUrl);

    return (
        <div className="relative w-full" style={{ paddingTop: '71.4%' }}>
            <img 
            src={randomUrl} 
            alt='random url'
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
        </div>
    )
}

export default RandomImage;

