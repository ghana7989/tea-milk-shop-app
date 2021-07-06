import React from 'react'
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import AppButton from '../components/AppButton'
import Header from '../components/Header'
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants'

const Rewards = ({navigation}) => {
	const {error, appTheme} = useSelector(state => state.theme)
	function renderRewardPointSection() {
		return (
			<View
				style={{
					alignItems: 'center',
					marginVertical: SIZES.padding,
				}}
			>
				<Text
					style={{
						color: COLORS.primary,
						...FONTS.h1,
						fontSize: 35,
					}}
				>
					Rewards
				</Text>
				<Text
					style={{
						color: appTheme.textColor,
						width: SIZES.width * 0.5,
						textAlign: 'center',
						marginTop: 10,
						lineHeight: 18,
						...FONTS.h3,
					}}
				>
					You are 50 Points away from next reward
				</Text>
				{/* Reward Point Section Image */}
				<ImageBackground
					source={icons.reward_cup}
					resizeMode='contain'
					style={{
						marginTop: SIZES.padding,
						width: SIZES.width * 0.6,
						height: SIZES.width * 0.6,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							width: 70,
							height: 70,
							borderRadius: 35,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: COLORS.white,
						}}
					>
						<Text
							style={{
								...FONTS.h1,
							}}
						>
							200
						</Text>
					</View>
				</ImageBackground>
			</View>
		)
	}
	function renderButtons() {
		return (
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* Scan */}
				<AppButton
					label='Scan In Store'
					containerStyle={{
						width: 130,
						paddingVertical: 5,
						marginRight: SIZES.radius,
						borderRadius: SIZES.radius * 2,
					}}
					labelStyle={{
						...FONTS.h3,
					}}
					onPress={() => navigation.navigate('Location')}
					isPrimaryButton={true}
				/>
				{/* Redeem */}
				<AppButton
					label='Redeem'
					containerStyle={{
						width: 130,
						paddingVertical: 5,
						borderRadius: SIZES.radius * 2,
					}}
					labelStyle={{
						...FONTS.h3,
					}}
					onPress={() => navigation.navigate('Location')}
					isSecondaryButton={true}
				/>
			</View>
		)
	}
	function renderAvailableRewardsHeader() {
		return (
			<View
				style={{
					marginTop: SIZES.padding,
					marginBottom: SIZES.radius,
					paddingHorizontal: SIZES.padding,
				}}
			>
				<Text
					style={{
						color: appTheme.textColor,
						...FONTS.h2,
					}}
				>
					Available Rewards
				</Text>
			</View>
		)
	}
	return (
		<View style={styles.container}>
			<Header />
			{/* Details */}
			<FlatList
				style={{
					marginTop: -25,
					borderTopRightRadius: SIZES.radius * 2,
					borderTopLeftRadius: SIZES.radius * 2,
					backgroundColor: appTheme.backgroundColor,
				}}
				data={dummyData.availableRewards}
				keyExtractor={item => item.id.toString()}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{/* Reward Points */}
						{renderRewardPointSection()}
						{/* Buttons */}
						{renderButtons()}
						{/* Header Label */}
						{renderAvailableRewardsHeader()}
					</View>
				}
				ListFooterComponent={
					<View
						style={{
							marginBottom: 120,
						}}
					/>
				}
				renderItem={({item}) => {
					return (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								marginHorizontal: SIZES.padding,
								paddingVertical: SIZES.base,
								marginBottom: SIZES.base,
								borderRadius: 20,
								backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2,
							}}
						>
							<Text
								style={{
									color: item.eligible ? COLORS.black : COLORS.lightGray2,
									...FONTS.body3,
								}}
							>
								{item.title}{' '}
							</Text>
						</View>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default Rewards
