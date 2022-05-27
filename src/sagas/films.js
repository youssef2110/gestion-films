import { takeEvery, call } from 'redux-saga/effects';
import { liste_films_action_done } from '../actions/films';
import urls from '../services/api';
import { callApi } from '../services/Callapi';
import { deleteRequest, get, patch } from '../services/request'



//liste_films
function* liste_films_saga() {
	console.log('test')
	yield call(
		callApi,
		`${urls.apiUrl}${urls.url_films}`,
		get,
        null,
        liste_films_action_done
	);
}
export function* watch_liste_films_saga() {
    yield takeEvery('LISTE_FILMS', liste_films_saga);
}

//modifier_film
function* edit_film_saga(action) {
	console.log('test')
	yield call(
		callApi,
		`${urls.apiUrl}${urls.url_films}`,
		patch,
        action,
        liste_films_action_done
	);
}
export function* watch_edit_film_saga() {
    yield takeEvery('EDIT_FILM', edit_film_saga);
}

//supprimer_film
function* delete_film_saga() {
	console.log('test')
	yield call(
		callApi,
		`${urls.apiUrl}${urls.url_films}`,
		get,
        deleteRequest,
        liste_films_action_done
	);
}
export function* watch_delete_film_saga() {
    yield takeEvery('DELETE_FILM', delete_film_saga);
}