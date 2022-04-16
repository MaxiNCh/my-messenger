import { RootState } from "..";

export const selectCountry = (state: RootState) => state.holidays.country;
export const selectHolidays = (state: RootState) => state.holidays.holidays;
export const selectError = (state: RootState) => state.holidays.error;
