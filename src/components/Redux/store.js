import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Redux/reducers/filmsReducer'
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export default store