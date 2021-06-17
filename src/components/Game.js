import React, { useEffect, useState } from 'react';
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import Choice from "./Choice";

export default function Game({setScore}) {
    const [gameStart, setGameStart] = useState(false);
    const [playerChoice, setPlayerChoice] = useState("");
    useEffect(() => {
        console.log(playerChoice);
    }, [playerChoice]);
    return (
        <section className="game-container">
            <div className="choice-container">
                <Choice 
                    image={rock} 
                    name={"rock"} 
                    setChoice={setPlayerChoice} 
                    startGame={() => setGameStart(true)} />
                <Choice 
                    image={scissors} 
                    name={"scissors"} 
                    setChoice={setPlayerChoice} 
                    startGame={() => setGameStart(true)} />
                <Choice 
                    image={paper}  
                    name={"paper"} 
                    setChoice={setPlayerChoice} 
                    startGame={() => setGameStart(true)} />
            </div>
        </section>
    )
}
