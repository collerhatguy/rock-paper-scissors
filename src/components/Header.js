import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
    const { score } = props;
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

const mapPropsToState = (state) => ({
    score: state.score
})

export default connect(mapPropsToState)(Header)
