export const TOGGLE_GAME = "TOGGLE_GAME";
export const toggleGame = () => ({
    type: TOGGLE_GAME
})

export const PLAYER_CHOICE = "PLAYER_CHOICE";
export const decidePlayerChoice = (choice) => ({
    type: PLAYER_CHOICE, payload: choice
})

export const HOUSE_CHOICE = "HOUSE_CHOICE";
export const decideHouseChoice = (choice) => ({
    type: HOUSE_CHOICE
})

export const DECIDE_WINNER = "DECIDE_WINNER";
export const decideWinner = () => ({
    type: DECIDE_WINNER
})

