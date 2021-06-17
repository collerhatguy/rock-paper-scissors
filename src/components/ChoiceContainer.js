import React from 'react'
import Choice from "./Choice";

export default function ChoiceContainer({setPlayerChoice, setGameStart, gameStart}) {
    return (
        <div className={`${gameStart ? "hidden" : "choice-container"}`}>
            <Choice 
                name={"rock"} 
                setChoice={setPlayerChoice} 
                startGame={() => setGameStart(true)} />
            <Choice 
                name={"scissors"} 
                setChoice={setPlayerChoice} 
                startGame={() => setGameStart(true)} />
            <Choice  
                name={"paper"} 
                setChoice={setPlayerChoice} 
                startGame={() => setGameStart(true)} />
        </div>
    )
}
