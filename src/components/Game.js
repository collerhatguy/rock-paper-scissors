import React, { useEffect, useState } from 'react';
import ChoiceContainer from "./ChoiceContainer";

export default function Game({setScore}) {
    const [gameStart, setGameStart] = useState(false);
    const [playerChoice, setPlayerChoice] = useState("");
    useEffect(() => {
        console.log(playerChoice);
    }, [playerChoice]);
    return (
        <section className="game-container">
            <ChoiceContainer setPlayerChoice={setPlayerChoice} setGameStart={setGameStart} />
            <div className="game-step-1">

            </div>
            <div className="game-step-2">

            </div>
            <div className="game-step-3">

            </div>
        </section>
    )
}
