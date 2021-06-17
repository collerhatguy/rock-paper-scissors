import React from 'react'

export default function Choice({image, name}) {
    return (
        <div className={`choice ${name}`}>
            <img src={image} />
        </div>
    )
}
