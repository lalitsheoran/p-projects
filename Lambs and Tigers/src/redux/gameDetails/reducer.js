import {
  WHO_WON,
  OPPONENT,
  GAME_COMPLETE,
  GAME_MODE
} from "./actionTypes";

const initState = {
  who_won:"",
  opponent:"Computer",
  game_complete:false,
  game_mode:""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case WHO_WON:
      return {
        ...state,
        who_won:action.payload
      };
    case OPPONENT:
      return {
        ...state,
        opponent:action.payload
      };
    case GAME_COMPLETE:
      return {
        ...state,
        game_complete:true
      };
    case GAME_MODE:
      return {
        ...state,
        game_mode:action.payload
      };

    default:
      return state;
  }
};

export default reducer;
