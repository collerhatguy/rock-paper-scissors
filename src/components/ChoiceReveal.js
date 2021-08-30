import React, { useState, useEffect } from 'react'
import Choice from "./Choice";

export default function ChoiceReveal({gameStart, playerChoice, reset, setScore}) {
    const choices = ["rock", "paper", "scissors"];
    const [outcome, setOutcome] = useState("");
    const [houseChoice, setHouseChoice] = useState("");

    const randomIndex = () => Math.floor(Math.random() * choices.length);
    const handleHouseChoice = () => {
        setHouseChoice(choices[randomIndex()]);
    }
    const win = () => {
        setOutcome("YOU WIN");
        setScore(prevScore => prevScore + 1)
    }
    const lose = () => {
        setOutcome("YOU LOSE");
        setScore(prevScore => prevScore - 1);
    }
    const tie = () => setOutcome("TIE");
    const undo = () => setOutcome("");

    useEffect(() => {
        if (gameStart === false) return undo();
        handleHouseChoice();
        if (playerChoice === "rock" && houseChoice === "scissors") win();
        if (playerChoice === "paper" && houseChoice === "rock") win();
        if (playerChoice === "scissors" && houseChoice === "paper") win();
        if (houseChoice === "rock" && playerChoice === "scissors") lose();
        if (houseChoice === "paper" && playerChoice === "rock") lose();
        if (houseChoice === "scissors" && playerChoice === "paper") lose();
        if (houseChoice === playerChoice) tie();
    }, [gameStart]);
    
    if (!gameStart) return null

    return <>
        <div className="choice-reveal">
            <div className="player-choice">
                <h2>You Picked</h2>
                <Choice name={playerChoice}/>
            </div>
            {outcome.length > 0 && <div
                className="outcome-declaration-desktop">
                <h2>{outcome}</h2>
                <button
                    onClick={() => reset()}
                    >Play Again</button>
            </div>}
            <div className="house-choice">
                <h2>The House Picked</h2>
                <Choice name={houseChoice}/>
            </div>
            {
                outcome.length > 0 && 
                    <div
                        className="outcome-declaration-mobile">
                        <h2>{outcome}</h2>
                        <button onClick={reset}
                        >Play Again</button>
                    </div>
            }
        </div>
    </>
}
