const query = state => state.filmsReducer.query
const queryFilms = state => state.filmsReducer.queryFilms
const myFilms = state => state.filmsReducer.myFilms
const filmById = state => state.filmsReducer.filmById
// const filmTtitle = state => state.filmsReducer.queryFilms.Title
// const filmYear = state => state.filmsReducer.queryFilms.filmYear
// const filmImdbID = state => state.filmsReducer.queryFilms.imdbID
// const filmType = state => state.filmsReducer.queryFilms.Type
// const filmPoster = state => state.filmsReducer.queryFilms.Poster

const selectors = {
    query,
    queryFilms,
    myFilms,
    filmById
}
export default selectors