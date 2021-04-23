import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

import Button from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

function Confirmation() {
  const { navigate } = useNavigation()

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={style.emoji}>😃</Text>
        <Text style={style.title}>Prontinho</Text>
        <Text style={style.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={style.footer}>
          <Button title='Começar' onPress={() => navigate('PlantSelect')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'space-around' },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    width: '100%',
  },
  emoji: { fontSize: 80 },
  footer: { marginTop: 20, paddingHorizontal: 50, width: '100%' },
  subtitle: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 17,
    paddingVertical: 20,
    textAlign: 'center',
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 22,
    lineHeight: 38,
    marginTop: 15,
    textAlign: 'center',
  },
})

export default Confirmation
