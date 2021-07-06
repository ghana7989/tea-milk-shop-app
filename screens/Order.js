import React, {useEffect, useState} from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	SafeAreaView,
	TouchableWithoutFeedback,
} from 'react-native'
import Svg, {Circle} from 'react-native-svg'
import {useSelector} from 'react-redux'
import IconButton from '../components/IconButton'
import TabButton from '../components/TabButton'
import VerticalTextButton from '../components/VerticalTextButton'
import {icons} from '../constants'
import dummyData from '../constants/dummy'
import {COLORS, FONTS, SIZES} from '../constants/theme'

const Order = ({navigation, route}) => {
	const {error, appTheme} = useSelector(state => state.theme)
	const [selectedTab, setSelectedTab] = useState(0)
	const [selectedCategory, setSelectedCategory] = useState('Milk Tea')
	const [selectedLocation, setSelectedLocation] = useState(null)
	const [menu, setMenu] = useState(null)
	useEffect(() => {
		const {selectedLocation} = route.params
		setSelectedLocation(selectedLocation)
	}, [])
	useEffect(() => {
		const menuList = dummyData.menuList.filter(
			menuItem => menuItem.category === selectedCategory,
		)
		setMenu(menuList)
	}, [selectedCategory])

	function renderHeaderSection() {
		return (
			<SafeAreaView
				style={{
					height: 140,
					backgroundColor: COLORS.primary,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						paddingHorizontal: SIZES.radius,
						marginTop: -50,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{/* Back Button */}
					<IconButton
						icon={icons.leftArrow}
						onPress={() => navigation.goBack()}
					/>

					{/* Title */}
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Text
							style={{
								color: COLORS.white,
								...FONTS.h1,
								fontSize: 25,
							}}
						>
							Pick-up Order
						</Text>
					</View>
				</View>
				<View
					style={{
						marginTop: SIZES.radius,
						backgroundColor: COLORS.white,
						paddingHorizontal: SIZES.radius,
						paddingVertical: 5,
						borderRadius: SIZES.padding,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							color: COLORS.primary,
							...FONTS.body3,
						}}
					>
						{selectedLocation?.title}
					</Text>
				</View>
			</SafeAreaView>
		)
	}
	function renderTopTabBar() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 50,
					marginTop: SIZES.radius,
					justifyContent: 'center',
					paddingLeft: SIZES.padding * 2,
					paddingRight: SIZES.padding,
				}}
			>
				{/* Tab Buttons */}
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
					}}
				>
					<TabButton
						selected={selectedTab === 0}
						onPress={() => setSelectedTab(0)}
						containerStyle={{
							width: 80,
						}}
						label='Menu'
					/>
					<TabButton
						selected={selectedTab === 1}
						onPress={() => setSelectedTab(1)}
						containerStyle={{
							width: 80,
						}}
						label='Previous'
					/>
					<TabButton
						selected={selectedTab === 2}
						onPress={() => setSelectedTab(2)}
						containerStyle={{
							width: 80,
						}}
						label='Favourite'
					/>
				</View>
				{/* Order Number */}
				<View
					style={{
						width: 35,
						height: 35,
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: COLORS.primary,
					}}
				>
					<Text
						style={{
							color: COLORS.white,
							...FONTS.h2,
						}}
					>
						0
					</Text>
				</View>
			</View>
		)
	}
	function renderSideBar() {
		return (
			<View style={{}}>
				<Svg height='65' width='65' viewBox='0 0 65 65'>
					<Circle cx='5' cy='60' r='60' fill={COLORS.primary} />
				</Svg>
				<View
					style={{
						marginTop: -15,
						width: 65,
						backgroundColor: COLORS.primary,
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 1,
					}}
				>
					<VerticalTextButton
						selected={selectedCategory === 'Snack'}
						onPress={() => setSelectedCategory('Snack')}
						label='Snack'
					/>
					<VerticalTextButton
						selected={selectedCategory === 'Coffee'}
						onPress={() => setSelectedCategory('Coffee')}
						label='Coffee'
						containerStyle={{
							marginTop: 50,
						}}
					/>
					<VerticalTextButton
						selected={selectedCategory === 'Smoothie'}
						onPress={() => setSelectedCategory('Smoothie')}
						containerStyle={{
							marginTop: 70,
							width: 100,
						}}
						label='Smoothie'
					/>
					<VerticalTextButton
						selected={selectedCategory === 'Special Tea'}
						onPress={() => setSelectedCategory('Special Tea')}
						containerStyle={{
							marginTop: 90,
							width: 100,
						}}
						label='Special Tea'
					/>
					<VerticalTextButton
						selected={selectedCategory === 'Milk Tea'}
						onPress={() => setSelectedCategory('Milk Tea')}
						containerStyle={{
							marginTop: 80,
							width: 80,
						}}
						label='Milk Tea'
					/>
				</View>
				<Svg height='65' width='65' viewBox='0 0 65 65'>
					<Circle cx='5' cy='0' r='60' fill={COLORS.primary} />
				</Svg>
			</View>
		)
	}
	return (
		<View style={styles.container}>
			{/* Header Section */}
			{renderHeaderSection()}
			{/* Details Section */}
			<View
				style={{
					flex: 1,
					marginTop: -45,
					backgroundColor: appTheme.backgroundColor,
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
				}}
			>
				{/* TabBar */}
				{renderTopTabBar()}
				{/* Detail container */}
				<View style={{flex: 1, flexDirection: 'row'}}>
					{/* Side Bar */}
					{renderSideBar()}
					{/* Listing */}
					<FlatList
						contentContainerStyle={{
							marginTop: SIZES.padding,
							paddingBottom: 50,
						}}
						data={menu}
						keyExtractor={item => item.id.toString()}
						renderItem={({item, index}) => {
							return (
								<TouchableWithoutFeedback
									onPress={() =>
										navigation.navigate('OrderDetail', {selectedItem: item})
									}
								>
									<View
										style={{
											height: 150,
											paddingHorizontal: SIZES.padding,
											marginTop: index > 0 ? SIZES.padding : 0,
											padding: 0,
											alignItems: 'flex-end',
											justifyContent: 'flex-end',
										}}
									>
										{/* Thumbnail */}
										<View
											style={{
												position: 'absolute',
												top: 0,
												left: SIZES.padding,
												width: 130,
												height: 140,
												alignItems: 'center',
												justifyContent: 'center',
												borderRadius: SIZES.radius,
												backgroundColor: COLORS.lightYellow,
												zIndex: 1,
											}}
										>
											<Image
												source={item.thumbnail}
												resizeMode='contain'
												style={{
													width: 100,
													height: 100,
												}}
											/>
										</View>
										{/* Details */}
										<View
											style={{
												width: '70%',
												height: '85%',
												paddingLeft: '22%',
												paddingRight: SIZES.base,
												paddingVertical: SIZES.base,
												borderRadius: SIZES.radius,
												justifyContent: 'space-between',
												backgroundColor: COLORS.primary,
											}}
										>
											<Text
												style={{
													color: COLORS.white,
													...FONTS.h1,
													fontSize: 20,
													lineHeight: 25,
												}}
											>
												{item.name}
											</Text>
											<Text
												style={{
													color: COLORS.lightYellow,
													...FONTS.h2,
													fontSize: 22,
												}}
											>
												{item.price}
											</Text>
										</View>
									</View>
								</TouchableWithoutFeedback>
							)
						}}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default Order
