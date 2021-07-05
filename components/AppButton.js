import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {COLORS} from '../constants'

const AppButton = ({
	containerStyle,
	label,
	labelStyle,
	onPress,
	isPrimaryButton,
	isSecondaryButton,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
				borderColor: isPrimaryButton ? COLORS.transparent : COLORS.primary,
				borderWidth: isSecondaryButton ? 1 : 0,
				...containerStyle,
			}}
		>
			<Text
				style={{
					color: isPrimaryButton ? COLORS.white : COLORS.primary,
					...labelStyle,
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	)
}

export default AppButton
