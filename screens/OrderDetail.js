import React, {useEffect, useState} from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
	Pressable,
} from 'react-native'
import {useSelector} from 'react-redux'
import IconButton from '../components/IconButton'
import {icons} from '../constants'
import dummyData from '../constants/dummy'
import {COLORS, FONTS, SIZES} from '../constants/theme'
const OrderDetail = ({navigation, route}) => {
	const {error, appTheme} = useSelector(state => state.theme)
	// States
	const [selectedItem, setSelectedItem] = useState(null)
	const [selectedMilkIndex, setSelectedMilkIndex] = useState(0)
	const [selectedSize, setSelectedSize] = useState(50)
	const [selectedSweetnessLevel, setSelectedSweetnessLevel] = useState(50)
	const [selectedIceLevel, setSelectedIceLevel] = useState(50)

	// States-END
	// Effects
	useEffect(() => {
		const {selectedItem} = route?.params
		setSelectedItem(selectedItem)
	}, [])
	// Effects-END
	// Functions
	function iceButtonOnPressHandle(action) {
		if (action === '+' && selectedIceLevel < 100) {
			setSelectedIceLevel(p => p + 25)
		} else if (action === '-' && selectedIceLevel > 0) {
			setSelectedIceLevel(p => p - 25)
		}
	}
	function sweetnessButtonOnPressHandle(action) {
		if (action === '+' && selectedSweetnessLevel < 100) {
			setSelectedSweetnessLevel(p => p + 25)
		} else if (action === '-' && selectedSweetnessLevel > 0) {
			setSelectedSweetnessLevel(p => p - 25)
		}
	}
	function milkButtonOnPressHandle(action) {
		if (
			action === 'next' &&
			selectedMilkIndex < dummyData.milkList.length - 1
		) {
			setSelectedMilkIndex(p => p + 1)
		} else if (action === 'prev' && selectedMilkIndex > 0) {
			setSelectedMilkIndex(p => p - 1)
		}
	}
	if (!selectedItem) return <></>
	function renderHeaderSection() {
		return (
			<View
				style={{
					width: '100%',
					height: '55%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						position: 'absolute',
						top: 0,
						left: 40,
						bottom: 0,
						right: 0,
						borderBottomLeftRadius: 100,
						backgroundColor: COLORS.primary,
					}}
				>
					<Image
						source={selectedItem?.thumbnail}
						resizeMode='contain'
						style={{
							width: SIZES.width * 0.7,
							height: SIZES.width * 0.7,
						}}
					/>
					{/* Back Button */}
					<IconButton
						containerStyle={{
							position: 'absolute',
							top: 25,
							left: -25,
							padding: 10,
							borderRadius: SIZES.radius,
							backgroundColor: COLORS.black,
						}}
						icon={icons.leftArrow}
						onPress={() => navigation.goBack()}
					/>
				</View>
			</View>
		)
	}
	function renderDetailSection() {
		return (
			<View
				style={{
					flex: 1,
					paddingHorizontal: 30,
					marginTop: SIZES.padding,
					justifyContent: 'space-between',
				}}
			>
				{/* name and description */}
				<View style={{}}>
					<Text
						style={{
							color: appTheme.headerColor,
							...FONTS.h1,
							fontSize: 25,
						}}
					>
						{selectedItem.name}
					</Text>

					<Text
						style={{
							color: appTheme.textColor,
							marginTop: SIZES.base,
							...FONTS.body3,
						}}
					>
						{selectedItem.description}
					</Text>
				</View>
				{/* Size */}
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: SIZES.radius,
					}}
				>
					{/* Label */}
					<Text
						style={{
							flex: 1,
							color: appTheme.headerColor,
							...FONTS.h2,
							fontSize: 20,
						}}
					>
						Pick a Size
					</Text>
					{/* Cup */}
					<View
						style={{
							flexDirection: 'row',
							flex: 1,
						}}
					>
						<Pressable
							style={{
								alignItems: 'center',
								justifyContent: 'flex-end',
							}}
							onPress={() => {
								setSelectedSize(20)
							}}
						>
							<ImageBackground
								source={icons.coffee_cup}
								style={{
									width: 80,
									height: 80,
									alignItems: 'center',
									justifyContent: 'center',
								}}
								imageStyle={{
									tintColor:
										selectedSize === 20 ? COLORS.primary : COLORS.gray2,
								}}
							>
								<Text
									style={{
										color: COLORS.white,
										...FONTS.body3,
									}}
								>
									20ml
								</Text>
							</ImageBackground>
							<Text
								style={{
									marginTop: 3,
									color: COLORS.white,
									...FONTS.body3,
								}}
							>
								₹ 250
							</Text>
						</Pressable>
						<Pressable
							style={{
								alignItems: 'center',
								justifyContent: 'flex-end',
							}}
							onPress={() => {
								setSelectedSize(50)
							}}
						>
							<ImageBackground
								source={icons.coffee_cup}
								style={{
									width: 100,
									height: 100,
									alignItems: 'center',
									justifyContent: 'center',
								}}
								imageStyle={{
									tintColor:
										selectedSize === 50 ? COLORS.primary : COLORS.gray2,
								}}
							>
								<Text
									style={{
										color: COLORS.white,
										...FONTS.body3,
									}}
								>
									50ml
								</Text>
							</ImageBackground>
							<Text
								style={{
									marginTop: 3,
									color: COLORS.white,
									...FONTS.body3,
								}}
							>
								₹ 350
							</Text>
						</Pressable>
					</View>
				</View>
				{/* Milk, Sweetness and Ice */}
				<View
					style={{
						flexDirection: 'row',
						marginTop: SIZES.padding,
					}}
				>
					{/* Milk */}
					<View
						style={{
							flex: 1,
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								color: appTheme.headerColor,
								...FONTS.h2,
								fontSize: 20,
							}}
						>
							Milk
						</Text>
						<View
							style={{
								flexDirection: 'row',
								width: 100,
								height: 100,
								marginTop: SIZES.radius,
								alignItems: 'center',
								borderRadius: SIZES.radius,
								backgroundColor: COLORS.primary,
							}}
						>
							<IconButton
								containerStyle={{
									marginLeft: -15,
									width: 25,
									height: 25,
									borderRadius: 3,
									backgroundColor: COLORS.white,
								}}
								icon={icons.leftArrow}
								iconStyle={{
									width: 15,
									height: 15,
									tintColor: COLORS.black,
								}}
								onPress={() => {
									milkButtonOnPressHandle('prev')
								}}
							/>
							<Image
								source={dummyData?.milkList[selectedMilkIndex]?.image}
								resizeMode='contain'
								style={{
									flex: 1,
									width: 70,
									height: 70,
									tintColor: COLORS.white,
								}}
							/>
							<IconButton
								containerStyle={{
									marginRight: -15,
									width: 25,
									height: 25,
									borderRadius: 3,
									backgroundColor: COLORS.white,
								}}
								icon={icons.rightArrow}
								iconStyle={{
									width: 15,
									height: 15,
									tintColor: COLORS.black,
								}}
								onPress={() => {
									milkButtonOnPressHandle('next')
								}}
							/>
						</View>
						<Text
							style={{
								marginTop: SIZES.base,
								color: COLORS.white,
								...FONTS.body3,
							}}
						>
							{dummyData?.milkList[selectedMilkIndex]?.name}
						</Text>
					</View>
					{/* Sweetness and Ice Section */}
					<View
						style={{
							flex: 1,
						}}
					>
						{/* Sweetness */}
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								paddingHorizontal: SIZES.padding,
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									color: appTheme.headerColor,
									...FONTS.h2,
									fontSize: 20,
								}}
							>
								Sweetness
							</Text>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									height: '60%',
									borderRadius: 15,
									backgroundColor: COLORS.primary,
								}}
							>
								<IconButton
									icon={icons.leftArrow}
									containerStyle={{
										marginLeft: -8,
										width: 25,
										height: 25,
										borderRadius: 3,
										backgroundColor: COLORS.white,
									}}
									iconStyle={{
										width: 15,
										height: 15,
										tintColor: COLORS.black,
									}}
									onPress={() => {
										sweetnessButtonOnPressHandle('-')
									}}
								/>
								<View
									style={{
										flex: 1,
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											color: COLORS.white,
											...FONTS.h3,
										}}
									>
										{selectedSweetnessLevel}%
									</Text>
								</View>
								<IconButton
									icon={icons.rightArrow}
									containerStyle={{
										marginRight: -8,
										width: 25,
										height: 25,
										borderRadius: 3,
										backgroundColor: COLORS.white,
									}}
									iconStyle={{
										width: 15,
										height: 15,
										tintColor: COLORS.black,
									}}
									onPress={() => {
										sweetnessButtonOnPressHandle('+')
									}}
								/>
							</View>
						</View>
						{/* Ice */}
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								paddingHorizontal: SIZES.padding,
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									color: appTheme.headerColor,
									...FONTS.h2,
									fontSize: 20,
								}}
							>
								Ice
							</Text>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									height: '60%',
									borderRadius: 15,
									backgroundColor: COLORS.primary,
								}}
							>
								<IconButton
									icon={icons.leftArrow}
									containerStyle={{
										marginLeft: -8,
										width: 25,
										height: 25,
										borderRadius: 3,
										backgroundColor: COLORS.white,
									}}
									iconStyle={{
										width: 15,
										height: 15,
										tintColor: COLORS.black,
									}}
									onPress={() => {
										iceButtonOnPressHandle('-')
									}}
								/>
								<View
									style={{
										flex: 1,
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											color: COLORS.white,
											...FONTS.h3,
										}}
									>
										{selectedIceLevel}%
									</Text>
								</View>
								<IconButton
									icon={icons.rightArrow}
									containerStyle={{
										marginRight: -8,
										width: 25,
										height: 25,
										borderRadius: 3,
										backgroundColor: COLORS.white,
									}}
									iconStyle={{
										width: 15,
										height: 15,
										tintColor: COLORS.black,
									}}
									onPress={() => {
										iceButtonOnPressHandle('+')
									}}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	}
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: appTheme.backgroundColor,
			}}
		>
			<ScrollView
				contentContainerStyle={{
					flex: 1,
					paddingBottom: 150,
				}}
			>
				{/*Header */}
				{renderHeaderSection()}
				{/* Detail */}
				{renderDetailSection()}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default OrderDetail
