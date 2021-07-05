import React, {createRef, useEffect, useRef, useState} from 'react'
import {Animated, Text, TouchableOpacity, View} from 'react-native'
import {COLORS, constants, FONTS, SIZES} from '../constants'

const promoTabs = constants.promoTabs.map(promoTab => ({
	...promoTab,
	ref: createRef(),
}))

const TabIndicator = ({measureLayout, scrollX}) => {
	if (measureLayout?.length === 0) return <></>
	const inputRange = promoTabs.map((_, index) => index * SIZES.width)
	const tabIndicatorWidth = scrollX.interpolate({
		inputRange,
		outputRange: measureLayout?.map(measure => measure.width),
	})
	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: measureLayout?.map(measure => measure.x),
	})
	return (
		<Animated.View
			style={{
				position: 'absolute',
				height: '100%',
				width: tabIndicatorWidth,
				left: 0,
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.primary,
				transform: [
					{
						translateX,
					},
				],
			}}
		/>
	)
}

const Tabs = ({appTheme, scrollX, onPromoTabPress, tabPosition}) => {
	const [measureLayout, setMeasureLayout] = useState([])
	const containerRef = useRef()
	useEffect(() => {
		const ml = []
		promoTabs.forEach(promo => {
			promo.ref.current.measureLayout(
				containerRef.current,
				(x, y, width, height) => {
					ml.push({x, y, width, height})
					if (ml.length === promoTabs.length) {
						setMeasureLayout(ml)
					}
				},
			)
		})
	}, [containerRef.current])
	return (
		<View
			ref={containerRef}
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-around',
				marginTop: SIZES.padding,
				backgroundColor: appTheme.tabBackgroundColor,
				borderRadius: SIZES.radius,
			}}
		>
			{/* Tab Indicator */}
			<TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
			{/* Tabs */}
			{promoTabs.map((item, index) => {
				const textColor = tabPosition.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [COLORS.lightGray2, COLORS.white, COLORS.lightGray2],
					extrapolate: 'clamp',
				})
				return (
					<TouchableOpacity onPress={() => onPromoTabPress(index)} key={index}>
						<View
							ref={item.ref}
							style={{
								paddingHorizontal: 23,
								alignItems: 'center',
								justifyContent: 'center',
								height: 40,
							}}
						>
							<Animated.Text
								style={{
									color: textColor,
									...FONTS.h3,
								}}
							>
								{item.title}
							</Animated.Text>
						</View>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

export default Tabs
