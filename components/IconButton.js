import React from 'react'
import {Image, TouchableOpacity} from 'react-native'
import {COLORS} from '../constants'

const IconButton = ({iconStyle, onPress, icon, containerStyle}) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				...containerStyle,
			}}
			onPress={onPress}
		>
			<Image
				resizeMode='contain'
				source={icon}
				style={{
					width: 25,
					height: 25,
					tintColor: COLORS.white,
					...iconStyle,
				}}
			/>
		</TouchableOpacity>
	)
}

export default IconButton
