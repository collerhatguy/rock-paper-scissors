import React from 'react'
import Choice from "./Choice";

export default function ChoiceContainer({setPlayerChoice, setGameStart, gameStart}) {
    if (gameStart) return null;
    return (
        <div className="choice-container">
            <Choice 
                name="rock" 
                setChoice={setPlayerChoice} 
                startGame={() => setGameStart(true)} />
            <Choice 
                name="scissors" 
                setChoice={setPlayerChoice} 
                startGame={() => setGameStart(true)} />
            <Choice  
                name="paper" 
                setChoice={setPlayerChoice} 
                startGame={() => setGameStart(true)} />
        </div>
    )
}
