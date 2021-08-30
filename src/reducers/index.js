import { TOGGLE_GAME, PLAYER_CHOICE, HOUSE_CHOICE, DECIDE_WINNER } from "../actions";

const choices = ["rock", "paper", "scissors"]

const initialState = {
    playerChoice: "",
    houseChoice: "",
    outcome: "",
    gameStart: false,
    score: 0
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case TOGGLE_GAME:
            return {
                ...state,
                gameStart: !state.gameStart
            }
        case PLAYER_CHOICE:
            return {
                ...state,
                playerChoice: actions.payload
            }
        case HOUSE_CHOICE:
            return {
                ...state,
                houseChoice: choices[Math.floor(Math.random() * choices.length)]
            }
        case DECIDE_WINNER:
            const win = {
                ...state,
                outcome: "YOU WIN",
                score: state.score + 1
            }
            const lose = {
                ...state,
                outcome: "YOU LOSE",
                score: state.score - 1
            }
            if (state.playerChoice === "rock" && state.houseChoice === "scissors") return win;
            if (state.playerChoice === "paper" && state.houseChoice === "rock") return win;
            if (state.playerChoice === "scissors" && state.houseChoice === "paper") return win;
            if (state.houseChoice === "rock" && state.playerChoice === "scissors") return lose;
            if (state.houseChoice === "paper" && state.playerChoice === "rock") return lose;
            if (state.houseChoice === "scissors" && state.playerChoice === "paper") return lose;
            return {
                ...state,
                outcome: "TIE"
            };
        default:
            return state
    }
}
export default reducer; 