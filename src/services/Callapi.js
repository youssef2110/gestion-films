import {put} from 'redux-saga/effects';

function* callApi(url, requestFunction, requestBody, callbackAction) {
    try {
    let response;
    if (requestBody) {
    response = yield requestFunction(url, requestBody);
    } else {
    response = yield requestFunction(url);
    }
    if (response && response !== null && response !== undefined) {
    const formattedData = response;
    if (callbackAction) {
        yield put(callbackAction(formattedData));
    }
    }
} catch (e) {
    yield put(callbackAction(e.response));
}
}
export { callApi };