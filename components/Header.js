import React from 'react'
import {
	Alert,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {COLORS, FONTS, icons, SIZES} from '../constants'
import {toggleTheme} from '../store/themeActions'

const Header = () => {
	const {error, appTheme} = useSelector(state => state?.theme)
	const dispatch = useDispatch()
	function toggleThemeHandler() {
		if (appTheme.name === 'light') {
			dispatch(toggleTheme('dark'))
		} else {
			dispatch(toggleTheme('light'))
		}
	}
	if (error) {
		Alert.alert('Something went wrong', error)
		return <></>
	}
	return (
		<SafeAreaView
			style={{
				alignItems: 'center',
				height: 100,
				width: '100%',
				backgroundColor: COLORS.purple,
				flexDirection: 'row',
			}}
		>
			<View
				style={{
					flex: 1,
					paddingLeft: SIZES.padding,
					paddingBottom: SIZES.padding,
				}}
			>
				<Text
					style={{
						color: COLORS.white,
						...FONTS.h2,
					}}
				>
					Pavan,
				</Text>
				<Text
					style={{
						color: COLORS.white,
						...FONTS.h2,
					}}
				>
					Welcome Back
				</Text>
			</View>
			{/* Toggle Button */}
			<TouchableOpacity
				onPress={toggleThemeHandler}
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					marginHorizontal: SIZES.padding,
					height: 40,
					borderRadius: 20,
					backgroundColor: COLORS.lightPurple,
					marginBottom: SIZES.padding,
				}}
			>
				{/* Sun */}
				<View
					style={{
						width: 40,
						height: 40,
						alignItems: 'center',
						justifyContent: 'center',
						...(appTheme.name === 'light' ? styles.lightMode : {}),
					}}
				>
					<Image
						source={icons.sunny}
						style={{
							height: 30,
							width: 30,
							tintColor: COLORS.white,
						}}
					/>
				</View>
				{/* Moon */}
				<View
					style={{
						width: 40,
						height: 40,
						alignItems: 'center',
						justifyContent: 'center',
						...(appTheme.name === 'dark' ? styles.nightMode : {}),
					}}
				>
					<Image
						source={icons.night}
						style={{
							height: 30,
							width: 30,
							tintColor: COLORS.white,
						}}
					/>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	nightMode: {
		borderRadius: 20,
		backgroundColor: COLORS.black,
	},
	lightMode: {
		borderRadius: 20,
		backgroundColor: COLORS.yellow,
	},
})

export default Header
