import React, {useCallback, useRef} from 'react'
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Text,
	ImageBackground,
	Animated,
	Image,
	Platform,
} from 'react-native'
import {useSelector} from 'react-redux'
import AppButton from '../components/AppButton'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants'

const Home = ({navigation}) => {
	const promoScrollViewRef = useRef()
	const onPromoTabPress = useCallback(promoIndex => {
		promoScrollViewRef.current.scrollToOffset({
			offset: promoIndex * SIZES.width,
		})
	})

	const {error, appTheme} = useSelector(state => state?.theme)
	const scrollX = useRef(new Animated.Value(0)).current
	const tabPosition = new Animated.divide(scrollX, SIZES.width)
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
				<View
					style={{
						flex: 1,
						backgroundColor: COLORS.lightPink,
						marginLeft: -10,
						borderRadius: 15,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							color: COLORS.primary,
							...FONTS.h2,
							fontSize: 26,
						}}
					>
						Available Rewards
					</Text>
					<View
						style={{
							marginTop: 5,
							padding: SIZES.base,
							borderRadius: SIZES.radius * 2,
							backgroundColor: COLORS.primary,
						}}
					>
						<Text
							style={{
								color: COLORS.white,
								letterSpacing: 2.7,
								...FONTS.h3,
							}}
						>
							270 points - ₹500 off
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
	function renderPromoDeals() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
				}}
			>
				{/* Tabs */}
				<Tabs
					tabPosition={tabPosition}
					appTheme={appTheme}
					scrollX={scrollX}
					onPromoTabPress={onPromoTabPress}
				/>
				{/* Details */}
				<Animated.FlatList
					ref={promoScrollViewRef}
					data={dummyData.promos}
					horizontal
					pagingEnabled
					scrollEventThrottle={16}
					snapToAlignment='center'
					showsHorizontalScrollIndicator={false}
					onScroll={Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: {x: scrollX},
								},
							},
						],
						{
							useNativeDriver: false,
						},
					)}
					keyExtractor={item => item.id.toString()}
					renderItem={({item, index}) => {
						return (
							<View
								style={{
									flex: 1,
									alignItems: 'center',
									width: SIZES.width,
									paddingTop: Platform.OS === 'ios' ? SIZES.padding : 0,
								}}
							>
								{/* Image */}
								<Image
									source={images.strawberryBackground}
									resizeMode='contain'
									style={{
										width: '100%',
									}}
								/>
								{/* Name */}
								<Text
									style={{
										color: COLORS.red,
										...FONTS.h1,
									}}
								>
									{item.name}
								</Text>
								{/* Description */}
								<Text
									style={{
										marginTop: 3,
										color: appTheme.textColor,
										...FONTS.body4,
									}}
								>
									{item.description}
								</Text>
								{/* Calories */}
								<Text
									style={{
										marginTop: 3,
										color: appTheme.textColor,
										...FONTS.body4,
									}}
								>
									{item.calories}
								</Text>
								{/* Button */}
								<AppButton
									onPress={() => navigation.navigate('Location')}
									label='Order Now'
									isPrimaryButton={true}
									containerStyle={{
										marginTop: 10,
										paddingHorizontal: SIZES.padding,
										paddingVertical: SIZES.base,
										borderRadius: SIZES.radius * 2,
									}}
									labelStyle={{...FONTS.h3}}
								/>
							</View>
						)
					}}
				/>
			</View>
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
				{renderPromoDeals()}
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
