import React from 'react';
import { connect } from 'react-redux';
import ChoiceContainer from "./ChoiceContainer";
import ChoiceReveal from './ChoiceReveal';

export function Game(props) {
    const { gameStart } = props;
    return (
        <section className="game-container">
            {gameStart ? <ChoiceReveal /> : <ChoiceContainer />}
        </section>
    )
}

const mapStateToProps = (state) => ({
    gameStart: state.gameStart
})

export default connect(mapStateToProps)(Game)
