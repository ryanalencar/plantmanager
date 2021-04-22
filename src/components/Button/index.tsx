import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface IButtonProps extends TouchableOpacityProps {
  title: string
}

function Button({ title, ...rest }: IButtonProps) {
  return (
    <TouchableOpacity style={style.button} activeOpacity={0.5} {...rest}>
      <Text style={style.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 16,
  },
})

export default Button
