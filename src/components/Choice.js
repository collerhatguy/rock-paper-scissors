import React from 'react'

export default function Choice({image, name}) {
    return (
        <div className={`choice-border ${name}`}>
            <div className={`choice`} >
                <img src={image} />
            </div>
        </div>
    )
}
