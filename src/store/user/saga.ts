import { UserInfo } from "firebase/auth";
import { put, takeEvery } from "redux-saga/effects"
import { authUser, setAuthed, setUser } from "./actionCreators";
import { AUTH_USER } from "./actionTypes"

function* onAuthUser({ type, payload }: ReturnType<typeof authUser>) {
  yield put(setUser(payload));
  yield put(setAuthed(!!payload));
}

function* authUserFlow() {
  yield takeEvery(AUTH_USER, onAuthUser)
}

export default authUserFlow;
