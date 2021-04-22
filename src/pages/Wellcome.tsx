import React from 'react'
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import watering from '../assets/watering.png'
import colors from '../styles/colors'

function Wellcome(): any {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {'\n'} suas plantas {'\n'}de forma fácil
      </Text>
      <Image source={watering} style={style.image} resizeMode='contain' />
      <Text style={style.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <TouchableOpacity activeOpacity={0.8} style={style.button}>
        <Feather name='chevron-right' size={32} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
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
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
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
