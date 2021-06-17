import React from 'react'

export default function Choice({image, name, setChoice, startGame}) {
    const handleClick = () => {
        setChoice(name);
        startGame();
    }
    return (
        <div className={`choice-border ${name}`}>
            <div
                onClick={() => handleClick()} 
                className={`choice`} >
                <img src={image} />
            </div>
        </div>
    )
}
