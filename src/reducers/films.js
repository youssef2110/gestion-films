export const initialState = {
    liste_films : [],
    edit_film : {},
    delete_film : {},
}

const films = (state = {}, action) => {
    switch (action.type) {
        case 'LISTE_FILMS_DONE':
            return {
                ...state,
                liste_films: action.payload,
            }
        case 'EDIT_FILM_DONE':
            return {
                ...state,
                edit_film: action.payload,
            }
        case 'DELETE_FILM_DONE':
            return {
                ...state,
                delete_film: action.payload,
            }
        default:
            return state;
    }
}
export default films