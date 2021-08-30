import React from 'react'

export default function Choice(props) {
    const { name, setChoice, startGame } = props;
    const handleClick = () => {
        setChoice(name);
        startGame();
    }
    return (
        <div className={`choice-border ${name}`}>
            <div
                onClick={() => handleClick()} 
                className={`choice`} >
                <img src={`${process.env.PUBLIC_URL}/images/icon-${name}.svg`} alt="possible choice"/>
            </div>
        </div>
    )
}
