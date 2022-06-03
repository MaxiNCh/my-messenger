import { SET_COUNTRY } from "../actionCreators";
import holidaysReducer, { HolidaysState } from "../reducer"
import { fetchHolidays } from "../routines";

const initialState: HolidaysState = {
  holidays: null,
  loading: false,
  error: null,
  country: ''
}

describe('holidays reducer', () => {
  it('sets error null when trigger action', () => {
    initialState.error = 'some error';
    const result = holidaysReducer(initialState, {
      type: fetchHolidays.TRIGGER
    })
    initialState.error = null;

    expect(result.error).toBeNull();
  })

  it('sets loading to true when trigger action', () => {
    const result = holidaysReducer(initialState, {
      type: fetchHolidays.TRIGGER
    })

    expect(result.loading).toBe(true);
  })

  it('sets given data to holidays when success action', () => {
    const payload = ['test'];
    const result = holidaysReducer(initialState, {
      type: fetchHolidays.SUCCESS,
      payload
    })

    expect(result.holidays).toEqual(payload);
  })

  it('sets error when failure action', () => {
    const error = 'new error';
    const result = holidaysReducer(initialState, {
      type: fetchHolidays.FAILURE,
      payload: error
    })

    expect(result.error).toBe(error);
  })

  it('sets holidays to null when failure action', () => {
    initialState.holidays = [{ test: 'test' }];
    const result = holidaysReducer(initialState, {
      type: fetchHolidays.FAILURE,
      payload: 'error'
    })
    initialState.holidays = null;

    expect(result.holidays).toBeNull();
  })

  it('sets loading to false on fulfill action', () => {
    initialState.loading = true;
    const result = holidaysReducer(initialState, {
      type: fetchHolidays.FULFILL
    })
    initialState.loading = false;

    expect(result.loading).toBe(false);
  })

  it('sets country on SET_COUNTRY action', () => {
    const country = 'Russia'
    const result = holidaysReducer(initialState, {
      type: SET_COUNTRY,
      payload: 'Russia'
    })

    expect(result.country).toBe(country);
  })
})
