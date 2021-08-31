import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleGame, decideWinner, decideHouseChoice } from "../actions";
import Choice from "./Choice";
import OutcomeDeclaration from './OutcomeDeclaration';

function ChoiceReveal(props) {
    
    const { playerChoice, houseChoice, decideWinner, decideHouseChoice } = props;
    
    useEffect(() => {
        decideHouseChoice()
        decideWinner()
    }, [])

    return <>
        <div className="choice-reveal" data-testid="choice-reveal">
            <div className="player-choice">
                <h2>You Picked</h2>
                <Choice name={playerChoice}/>
            </div>
            <OutcomeDeclaration className="outcome-declaration-desktop"/>
            <div className="house-choice">
                <h2>The House Picked</h2>
                <Choice name={houseChoice}/>
            </div>
            <OutcomeDeclaration className="outcome-declaration-mobile"/>
        </div>
    </>
}

const mapStateToProps = (state) => ({
    outcome: state.outcome,
    playerChoice: state.playerChoice,
    houseChoice: state.houseChoice
})

export default connect(mapStateToProps, { toggleGame, decideWinner, decideHouseChoice })(ChoiceReveal)
