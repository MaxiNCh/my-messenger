export const SET_COUNTRY = 'HOLIDAYS::SET_COUNTRY'

export type SetCountryAction = ReturnType<typeof setCountryToFetch>;

export const setCountryToFetch = (country: string) => ({
  type: SET_COUNTRY,
  payload: country
})
