import React, { useEffect, useState } from 'react';
import ChoiceContainer from "./ChoiceContainer";
import Choice from "./Choice";

export default function Game({setScore}) {
    const [gameStart, setGameStart] = useState(false);
    const [playerChoice, setPlayerChoice] = useState("");
    useEffect(() => {
        console.log(playerChoice);
    }, [playerChoice]);
    return (
        <section className="game-container">
            <ChoiceContainer 
                setPlayerChoice={setPlayerChoice} 
                setGameStart={setGameStart} 
                gameStart={gameStart} 
            />
            <div className={`${gameStart ? "game-step-1" : "hidden"}`}>
                <h2 className="player-choice">You Picked: </h2>
                <Choice 
                        name={playerChoice}
                        setChoice={() => null}
                        startGame={() => null}
                        />
            </div>
            <div className="game-step-2">

            </div>
            <div className="game-step-3">
            </div>
        </section>
    )
}
