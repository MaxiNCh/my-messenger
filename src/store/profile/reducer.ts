import { TOGGLE_NAME } from "./actions";

const initialState = {
  showName: false,
  name: 'Max'
}

type ActionTypes = { type: string; };

export const profileReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case TOGGLE_NAME: {
      return {
        ...state,
        showName: !state.showName
      };
    }
    default:
      return state;
  }
}
