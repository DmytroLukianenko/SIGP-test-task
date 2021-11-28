import { createAction } from '@reduxjs/toolkit'

const queryRequest = createAction('queryFilm/getRequest')
const querySuccess = createAction('queryFilm/getSuccess')
const querryErorr = createAction('queryFilm/getError')

const addFavoriteFilm = createAction('addFavorite/success')

const loadMoreRequest = createAction('loadMore/request')
const loadMoreSuccess = createAction('loadMore/success')
const loadMoreError = createAction('loadMore/error')

const deleteFilm = createAction('deleteFilm')

const detailInfoRequest = createAction('detail/request')
const detailInfoSuccess = createAction('detail/success')
const detailInfoError = createAction('detail/error')

const clearPage = createAction('clearPage')

const actions = {
    queryRequest,
    querySuccess,
    querryErorr,
    addFavoriteFilm,
    loadMoreRequest,
    loadMoreSuccess,
    loadMoreError,
    deleteFilm,
    detailInfoRequest,
    detailInfoSuccess,
    detailInfoError,
    clearPage
}
export default actions