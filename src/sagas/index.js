import { all } from 'redux-saga/effects';
import { watch_delete_film_saga, watch_edit_film_saga, watch_liste_films_saga } from './films';

export default function* rootSaga() {
    yield all([
        watch_liste_films_saga(),
        watch_edit_film_saga(),
        watch_delete_film_saga()
    ]);
}
  