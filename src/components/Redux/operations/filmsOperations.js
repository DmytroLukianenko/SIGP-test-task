import axios from 'axios'
import { toast } from 'react-toastify'
import actions from '../actions/filmsActions'

const API_KEY = '4b446f68'
const URL = `http://omdbapi.com/?apikey=${API_KEY}`

export const getQueryFilm = (query) => async dispatch => {
    dispatch(actions.queryRequest())
    try {
        const response = await axios.get(`${URL}&s=${query}`)
        response.data.Search ? dispatch(actions.querySuccess(response.data)) : toast.warning(response.data.Error)
    } catch (error) {
        dispatch(actions.queryError(error))
    }
}

export const getMoreFilms = (page, query) => async dispatch => {
    dispatch(actions.loadMoreRequest())
    try {
        const response = await axios.get(`${URL}&s=${query}&page=${page}`)
        dispatch(actions.loadMoreSuccess(response.data))
    } catch (error) {
        dispatch(actions.loadMoreError(error))
    }
}

export const detailInfo = (id) => async dispatch => {
    dispatch(actions.detailInfoRequest())
    try {
        const response = await axios.get(`${URL}&i=${id}`)
        dispatch(actions.detailInfoSuccess(response.data))
    } catch (error) {
        dispatch(actions.detailInfoError(error.message))
    }
}
