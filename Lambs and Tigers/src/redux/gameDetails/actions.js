import {
  WHO_WON,
  OPPONENT,
  GAME_COMPLETE,
  GAME_MODE
} from "./actionTypes";

export const who_won = value => ({
  type: WHO_WON,
  payload:value
});
export const opponent = value => ({
  type: OPPONENT,
  payload:value
});
export const game_complete = () => ({
  type: GAME_COMPLETE,
});
export const game_mode = value => ({
  type: GAME_MODE,
  payload:value
});
