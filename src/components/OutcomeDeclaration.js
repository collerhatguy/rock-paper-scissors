import React from 'react';
import { connect } from 'react-redux';
import { toggleGame } from "../actions";

export function OutcomeDeclaration(props) {
    const { outcome, toggleGame, className } = props;
    return (
        <div className={className}>
            <h2 data-testid="outcome">{outcome}</h2>
            <button 
                onClick={toggleGame}
                data-testid="toggle-btn"
            >Play Again</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    outcome: state.outcome,
})

export default connect(mapStateToProps, { toggleGame })(OutcomeDeclaration);