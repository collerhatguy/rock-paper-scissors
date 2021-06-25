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
        if (houseChoice === "rock" && playerChoice === "rock") tie();
        if (houseChoice === "paper" && playerChoice === "paper") tie();
        if (houseChoice === "scissors" && playerChoice === "scissors") tie();
    }, [gameStart]);
    return (
        <div className={`${gameStart ? "choice-reveal" : "hidden"}`}>
            <div className="player-choice">
                <h2>You Picked</h2>
                <Choice 
                    name={playerChoice}
                    setChoice={() => null}
                    startGame={() => null}
                />
            </div>
            <div
                style={{display: outcome === "" ? "none" : "flex"}} 
                className="outcome-declaration-desktop">
                <h2>{outcome}</h2>
                <button
                    onClick={() => reset()}
                    >Play Again</button>
            </div>
            <div className="house-choice">
                <h2>The House Picked</h2>
                <Choice 
                    name={houseChoice}
                    setChoice={() => null}
                    startGame={() => null}
                />
            </div>
            <div
                style={{display: outcome === "" ? "none" : "flex"}} 
                className="outcome-declaration-mobile">
                <h2>{outcome}</h2>
                <button
                    onClick={() => reset()}
                    >Play Again</button>
            </div>
        </div>
    )
}
