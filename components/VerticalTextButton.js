import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {COLORS, FONTS} from '../constants'

const VerticalTextButton = ({
	containerStyle,
	labelStyle,
	label,
	onPress,
	selected,
}) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				transform: [{rotate: '-90deg'}],
				...containerStyle,
			}}
			onPress={onPress}
		>
			<Text
				style={{
					color: selected ? COLORS.white : COLORS.lightGreen,
					...FONTS.body2,
					fontSize: 20,
					...labelStyle,
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	)
}

export default VerticalTextButton
