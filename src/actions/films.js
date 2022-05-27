//Liste films
export function liste_films_action(payload) {
    return {
        type: 'LISTE_FILMS',
        payload,
    };
}
export function liste_films_action_done(request) {
    return {
        type: 'LISTE_FILMS_DONE',
        payload: request,
    };
}
//Modifier film
export function edit_film_action(payload) {
    return {
        type: 'EDIT_FILM',
        payload,
    };
}
export function edit_film_action_done(request) {
    return {
        type: 'EDIT_FILM_DONE',
        payload: request,
    };
}
//supprimer film
export function delete_film_action(payload) {
    return {
        type: 'DELETE_FILM',
        payload,
    };
}
export function delete_film_action_done(request) {
    return {
        type: 'DELETE_FILM_DONE',
        payload: request,
    };
}
