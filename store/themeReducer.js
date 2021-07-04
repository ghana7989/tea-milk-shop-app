import React from 'react'
import {selectedTheme} from '../constants'
import * as themeActionTypes from './themeActions'

const INITIAL_STATE = {
	appTheme: selectedTheme,
	error: '',
}

const themeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case themeActionTypes.TOGGLE_THEME_BEGIN:
			return {
				...state,
			}
		case themeActionTypes.TOGGLE_THEME_SUCCESS:
			return {
				...state,
				appTheme: action.payload,
			}
		case themeActionTypes.TOGGLE_THEME_FAILURE:
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}

export default themeReducer
