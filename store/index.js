import React from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
	theme: themeReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export const StoreProvider = ({children}) => (
	<Provider store={store}>{children}</Provider>
)
