import React from 'react';
import { connect } from 'react-redux';
import { toggleGame } from "../actions";

function OutcomeDeclaration(props) {
    const { outcome, toggleGame, className } = props;
    return (
        <div className={className}>
            <h2>{outcome}</h2>
            <button onClick={toggleGame}
            >Play Again</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    outcome: state.outcome,
})

export default connect(mapStateToProps, { toggleGame })(OutcomeDeclaration);