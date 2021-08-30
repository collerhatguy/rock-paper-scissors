import React from 'react';
import { connect } from 'react-redux';
import { decidePlayerChoice, toggleGame } from "../actions";

function Choice(props) {
    const { name, decidePlayerChoice, toggleGame } = props;
    const handleClick = () => {
        decidePlayerChoice(name);
        toggleGame();
    }
    return (
        <div className={`choice-border ${name}`}>
            <div
                onClick={() => handleClick()} 
                className={`choice`} >
                <img 
                    src={`${process.env.PUBLIC_URL}/images/icon-${name}.svg`} 
                    alt="possible choice"
                />
            </div>
        </div>
    )
}

export default connect(null, { toggleGame, decidePlayerChoice })(Choice)