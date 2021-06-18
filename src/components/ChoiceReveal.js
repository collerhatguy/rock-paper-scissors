import React, { useState, useEffect } from 'react'
import Choice from "./Choice";

export default function ChoiceReveal({gameStart, playerChoice, reset, setScore}) {
    const randomNum = () => Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    const [outcome, setOutcome] = useState("");
    const [houseChoice, setHouseChoice] = useState("")
    useEffect(() => {
        if (gameStart === false) setOutcome("");
        if (gameStart === false) return;
        setHouseChoice(choices[randomNum()]);
        if (playerChoice === houseChoice) setOutcome("Tie");
        if (playerChoice === "rock" && houseChoice === "scissors") setOutcome("YOU WIN");
        if (playerChoice === "paper" && houseChoice === "rock") setOutcome("YOU WIN");
        if (playerChoice === "scissors" && houseChoice === "paper") setOutcome("YOU WIN");
        if (outcome.length === 0) setOutcome("YOU LOSE");
        if (outcome === "YOU WIN") setScore(prevScore => prevScore + 1);
        if (outcome === "YOU LOSE") setScore(prevScore => prevScore - 1);
    }, [gameStart]);
    return (
        <div className={`${gameStart ? "game-step-1" : "hidden"}`}>
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
                className="outcome-declaration">
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
        </div>
    )
}
