import React from 'react'

export default function Header({score}) {
    return (
        <header>
          <h1>
              ROCK<br/>
              PAPER<br/>
              SCISSORS<br/>
            </h1>
            <div className="score-container">
                <h2>Score</h2>
                <span className="score">{score}</span>
            </div>
        </header>
    )
}
