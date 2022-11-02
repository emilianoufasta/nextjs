import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './catsState';
// CALL to 'call' urls on api
// PUT to dispatch actions
// TAKE_EVERY to watch sagas

function* workGetCatsFetch(): any {
  const response = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
  const formattedCats = yield response.json();
  const shortList = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(shortList));
}

export function* catsSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}