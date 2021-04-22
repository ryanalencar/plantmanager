import React from 'react'
import { Text, Image, SafeAreaView, StyleSheet } from 'react-native'

import watering from '../assets/watering.png'
import Button from '../components/Button'
import colors from '../styles/colors'

function Wellcome(): any {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {'\n'} suas plantas {'\n'}de forma fácil
      </Text>
      <Image source={watering} style={style.image} />
      <Text style={style.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title='>' activeOpacity={0.8} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    height: 294,
    width: 292,
  },
  subtitle: {
    color: colors.heading,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
  },
})

export default Wellcome
