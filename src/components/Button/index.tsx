import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native'

import colors from '../../styles/colors'

interface IButtonProps extends TouchableOpacityProps {
  title: string
}

function Button({ title, ...rest }: IButtonProps): any {
  return (
    <TouchableOpacity style={style.button} {...rest}>
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
    width: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
})

export default Button
