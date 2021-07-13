import React from 'react'

export default function Choice({name, setChoice, startGame}) {
    const handleClick = () => {
        setChoice(name);
        startGame();
    }
    const image = () => `${process.env.PUBLIC_URL}/images/icon-${name}.svg`
    return (
        <div className={`choice-border ${name}`}>
            <div
                onClick={() => handleClick()} 
                className={`choice`} >
                <img src={image()} />
            </div>
        </div>
    )
}
