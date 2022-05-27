import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { delete_film_action, edit_film_action, liste_films_action } from '../actions/films'

function Home({
  liste_films,
  edit_film,
  delete_film,
  liste_films_action,
  edit_film_action,
  delete_film_action
}) {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)
  const [emptyListe, setEmptyListe] = useState(false)

  useEffect(() => {
      //liste_films_action()
  }, [])
  useEffect(() => {
    if(liste_films != undefined){
        if(liste_films.length !== 0){
            setEmptyListe(false)
            setFilms(liste_films)
        }else{
            setEmptyListe(true)
        }
        setLoading(true)
    }
}, [liste_films])

  return (
    <div>
      {
        loading ? 
          emptyListe ? 
            <div> Empty Liste</div>
            :
            <div>Liste Film {films}</div>
          :
          <div>loading ...</div>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  liste_films: state.films.liste_films,
  edit_film: state.films.edit_film,
  delete_film: state.films.delete_film,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      liste_films_action: liste_films_action,
      edit_film_action: edit_film_action,
      delete_film_action: delete_film_action
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)