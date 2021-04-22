import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Alert,
  Keyboard,
} from 'react-native'

import Button from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>('')
  const { navigate } = useNavigation()

  const handleInputFocus = () => setIsFocused(true)
  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }
  const handleInputChange = useCallback((value: string) => {
    setIsFilled(!!value)
    setName(value)
  }, [])

  const handleSubmit = () => {
    if (name === '') {
      Alert.alert('⚠️Campo vazio', 'Campo  nome não pode estar vazio', [
        { text: 'OK', style: 'default' },
      ])
    } else {
      navigate('Confirmation')
    }
  }
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.content}>
            <View style={style.form}>
              <View style={style.header}>
                <Text style={style.emoji}>{isFilled ? '😃' : '😄'}</Text>
                <Text style={style.title}>
                  Como podemos {'\n'} chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  style.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder='Digite seu nome'
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                value={name}
              />
              <View style={style.footer}>
                <Button
                  title='Confirmar'
                  onPress={handleSubmit}
                  activeOpacity={0.8}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
