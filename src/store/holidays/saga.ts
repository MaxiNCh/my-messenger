import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchHolidays } from "./routines";

const PUBLIC_HOLIDAY_API = 'https://date.nager.at/api/v3/publicholidays'

export type FetchHolidaysAction = {
  type: string,
  payload: countryData
}

type countryData = {
  countryCode: string,
  year: string
}

function* fetchHolidaysFromServer({ type, payload }: FetchHolidaysAction) {
  try {
    yield put(fetchHolidays.request());

    const response: Response = yield call(fetch, `${PUBLIC_HOLIDAY_API}/${payload.year}/${payload.countryCode}`);

    const holidays: [] = yield response.json();

    yield put(fetchHolidays.success(holidays));
  } catch (error: any) {
    yield put(fetchHolidays.failure(error.message));
  } finally {
    yield put(fetchHolidays.fulfill());
  }
}

function* requestWatcherSaga() {
  yield takeEvery(fetchHolidays.TRIGGER, fetchHolidaysFromServer)
}

export default requestWatcherSaga;
