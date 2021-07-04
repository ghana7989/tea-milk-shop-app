import React from 'react'
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Text,
} from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import {useSelector} from 'react-redux'
import Header from '../components/Header'
import {COLORS, FONTS, icons, SIZES} from '../constants'

const Home = ({navigation}) => {
	const {error, appTheme} = useSelector(state => state?.theme)

	function renderAvailableRewards() {
		return (
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					marginHorizontal: SIZES.padding,
					marginTop: SIZES.padding,
					height: 100,
				}}
				onPress={() => {
					navigation.navigate('Rewards')
				}}
			>
				{/* Reward Cup Section */}
				<View
					style={{
						width: 100,
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: COLORS.pink,
						borderTopLeftRadius: 15,
						borderBottomLeftRadius: 15,
					}}
				>
					<ImageBackground
						source={icons.reward_cup}
						resizeMode='contain'
						style={{
							width: 85,
							height: 85,
							alignItems: 'center',
							justifyContent: 'center',
							marginLeft: 3,
						}}
					>
						<View
							style={{
								width: 30,
								height: 30,
								borderRadius: 15,
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: COLORS.transparentBlack,
							}}
						>
							<Text
								style={{
									color: COLORS.white,
									...FONTS.h4,
								}}
							>
								360
							</Text>
						</View>
					</ImageBackground>
				</View>
				{/* Reward Details Section */}
			</TouchableOpacity>
		)
	}

	return (
		<View style={styles.container}>
			<Header />
			<ScrollView
				style={{
					flex: 1,
					marginTop: -25,
					borderTopLeftRadius: SIZES.radius * 2,
					borderTopRightRadius: SIZES.radius * 2,
					backgroundColor: appTheme.backgroundColor,
				}}
				contentContainerStyle={{
					paddingBottom: 150,
				}}
			>
				{/* Rewards Section */}
				{renderAvailableRewards()}
				{/* Promo Section */}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default Home
