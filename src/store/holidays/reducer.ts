import { AnyAction } from "redux";
import { SET_COUNTRY } from "./actionCreators";
import { fetchHolidays } from "./routines";

const initialState = {
  holidays: null,
  loading: false,
  error: null,
  country: ''
}

export default function holidaysReducer(state = initialState, { type, payload }: AnyAction) {
  switch (type) {
    case fetchHolidays.TRIGGER:
      return {
        ...state,
        error: null,
        loading: true
      };
    case fetchHolidays.SUCCESS:
      return {
        ...state,
        holidays: payload
      };
    case fetchHolidays.FAILURE:
      return {
        ...state,
        holidays: null,
        error: payload
      };
    case fetchHolidays.FULFILL:
      return {
        ...state,
        loading: false
      };
    case SET_COUNTRY: {
      return {
        ...state,
        country: payload
      }
    }
    default:
      return state;
  }
}
