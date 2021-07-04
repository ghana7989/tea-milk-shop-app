import React from 'react'
import {darkTheme, lightTheme} from '../constants'

export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN'
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS'
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE'

export const toggleThemeBegin = () => {
	return {type: TOGGLE_THEME_BEGIN}
}
export const toggleThemeFailure = error => {
	return {type: TOGGLE_THEME_FAILURE, payload: error}
}
export const toggleThemeSuccess = selectedTheme => {
	return {type: TOGGLE_THEME_SUCCESS, payload: selectedTheme}
}

export const toggleTheme = themeType => {
	return dispatch => {
		dispatch(toggleThemeBegin)
		switch (themeType) {
			case 'dark':
				dispatch(toggleThemeSuccess(darkTheme))
				return
			case 'light':
				dispatch(toggleThemeSuccess(lightTheme))
				return

			default:
				dispatch(toggleThemeFailure('Invalid Theme'))
				return
		}
	}
}
