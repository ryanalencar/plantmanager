import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

function UserIdentification() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <View style={style.form}>
          <Text style={style.emoji}>😃</Text>
          <Text style={style.title}>Como podemos {'\n'} chamar você?</Text>
          <TextInput style={style.input} />
        </View>
      </View>
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
  content: { flex: 1, width: '100%' },
  emoji: { fontSize: 44 },
  form: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
  },
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
