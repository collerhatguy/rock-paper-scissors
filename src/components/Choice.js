import React from 'react'
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

export default function Choice({name, setChoice, startGame}) {
    const handleClick = () => {
        setChoice(name);
        startGame();
    }
    const image = () => {
        if (name === "rock") return rock;
        if (name === "scissors") return scissors;
        if (name === "paper") return paper;
    }
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
