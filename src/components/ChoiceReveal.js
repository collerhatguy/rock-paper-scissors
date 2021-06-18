import React from 'react'
import Choice from "./Choice";

export default function ChoiceReveal({gameStart, playerChoice}) {
    const choices = ["rock", "paper", "scissors"];
    const houseChoice = Math.ceil(Math.random() * 3);
    return (
        <div className={`${gameStart ? "game-step-1" : "hidden"}`}>
            <h2 
                className="player-choice">You Picked</h2>
            <h2 
                className="house-choice">The House Picked</h2>
            <Choice 
                name={playerChoice}
                setChoice={() => null}
                startGame={() => null}
            />
            <Choice 
                name={choices[houseChoice]}
                setChoice={() => null}
                startGame={() => null}
            />
        </div>
    )
}
