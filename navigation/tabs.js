import React from 'react'
import {Image, Platform} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Home, Rewards} from '../screens'
import {COLORS, SIZES, icons} from '../constants'
import CustomTabBarButton from '../components/CustomTabBarButton'
import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator()

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBar={props => <CustomTabBar props={props} />}
			tabBarOptions={{
				showLabel: false,
				style: {
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					elevation: 0,
					backgroundColor: 'transparent',
					borderTopColor: 'transparent',
					height: Platform.OS == 'android' ? 60 : 80,
				},
			}}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.home}
							resizeMode='contain'
							style={{
								width: 35,
								height: 35,
								tintColor: focused ? COLORS.primary : COLORS.black,
							}}
						/>
					),
					tabBarButton: props => {
						return (
							<CustomTabBarButton
								{...props}
								containerStyle={{
									borderTopLeftRadius: SIZES.radius * 5,
								}}
							></CustomTabBarButton>
						)
					},
				}}
			/>
			<Tab.Screen
				name='Rewards'
				component={Rewards}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.bubbleTea}
							resizeMode='contain'
							style={{
								width: 35,
								height: 35,
								tintColor: focused ? COLORS.primary : COLORS.black,
							}}
						/>
					),
					tabBarButton: props => {
						return (
							<CustomTabBarButton
								{...props}
								containerStyle={{
									marginRight: 6,
								}}
							></CustomTabBarButton>
						)
					},
				}}
			/>

			<Tab.Screen
				name='AddOrder'
				component={Home}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.add}
							resizeMode='contain'
							style={{
								width: 35,
								height: 35,
								tintColor: COLORS.white,
							}}
						/>
					),
					tabBarButton: props => {
						return (
							<CustomTabBarButton
								{...props}
								isFloat={true}
							></CustomTabBarButton>
						)
					},
				}}
			/>
			<Tab.Screen
				name='Favourite'
				component={Home}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.heart}
							resizeMode='contain'
							style={{
								width: 35,
								height: 35,
								tintColor: focused ? COLORS.primary : COLORS.black,
							}}
						/>
					),
					tabBarButton: props => {
						return (
							<CustomTabBarButton
								{...props}
								containerStyle={{
									marginLeft: 6,
								}}
							></CustomTabBarButton>
						)
					},
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Home}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.profile}
							resizeMode='contain'
							style={{
								width: 35,
								height: 35,
								tintColor: focused ? COLORS.primary : COLORS.black,
							}}
						/>
					),
					tabBarButton: props => {
						return (
							<CustomTabBarButton
								{...props}
								containerStyle={{
									borderTopRightRadius: SIZES.radius * 5,
								}}
							></CustomTabBarButton>
						)
					},
				}}
			/>
		</Tab.Navigator>
	)
}

export default Tabs
