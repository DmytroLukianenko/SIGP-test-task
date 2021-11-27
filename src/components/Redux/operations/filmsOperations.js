import axios from 'axios'
import actions from '../actions/filmsActions'

const API_KEY = '4b446f68'
const URL = `http://omdbapi.com/?apikey=${API_KEY}`

const getQueryFilm = (query) => async dispatch => {
    dispatch(actions.queryRequest())
    try {
        const response = await axios.get(`${URL}&s=${query}`)
        console.log('response', response.data)
        dispatch(actions.querySuccess(response.data))
    } catch {
        dispatch(actions.queryError())
    }
}
export default getQueryFilm