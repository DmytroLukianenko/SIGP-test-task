import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import filmsActions from '../actions/filmsActions'

const filmsInitialState = {
    queryFilms: [],
    error: '',
    filmById: {},
    myFilms: [],
}

const filmsReducer = createReducer(
    { ...filmsInitialState },
    {
        [filmsActions.querySuccess]: (state, { payload }) => ({ ...state, queryFilms: [...payload.Search] }),
        [filmsActions.addFavoriteFilm]: (state, { payload }) => ({ ...state, myFilms: [...state.myFilms, { ...payload }] }),
        [filmsActions.loadMoreSuccess]: (state, { payload }) => ({ ...state, queryFilms: [...state.queryFilms, ...payload.Search] }),
        [filmsActions.deleteFilm]: (state, { payload }) => ({ ...state, myFilms: state.myFilms.filter(f => f.imdbID !== payload) }),
        [filmsActions.detailInfoSuccess]: (state, { payload }) => ({ ...state, filmById: payload }),
    }
)

export default combineReducers({
    filmsReducer,
})