import React, { useCallback, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

import Button from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  const handleInputFocus = () => setIsFocused(true)
  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }
  const handleInputChange = useCallback((value: string) => {
    setIsFilled(!!value)
    setName(value)
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={style.content}>
          <View style={style.form}>
            <View style={style.header}>
              <Text style={style.emoji}>{isFilled ? '😃' : '😄'}</Text>
              <Text style={style.title}>Como podemos {'\n'} chamar você?</Text>
            </View>
            <TextInput
              style={[
                style.input,
                (isFocused || isFilled) && { borderColor: colors.green },
              ]}
              placeholder='Digite seu nome'
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChange={() => handleInputChange}
            />
            <View style={style.footer}>
              <Button title='Confirmar' activeOpacity={0.8} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  emoji: { fontSize: 44 },
  footer: {
    marginTop: 40,
    paddingHorizontal: 20,
    width: '100%',
  },
  form: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
  },
  header: { alignItems: 'center' },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 32,
    marginTop: 20,
    textAlign: 'center',
  },
})

export default UserIdentification
