import { createAction } from '@reduxjs/toolkit'

const queryRequest = createAction('queryFilm/getRequest')
const querySuccess = createAction('queryFilm/getSuccess')
const querryErorr = createAction('queryFilm/getError')


const actions = {
    queryRequest,
    querySuccess,
    querryErorr
}
export default actions