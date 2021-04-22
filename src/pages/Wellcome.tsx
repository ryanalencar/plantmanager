import React from 'react'
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import watering from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

function Wellcome(): any {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.title}>
          Gerencie {'\n'} suas plantas de{'\n'} forma fácil
        </Text>
        <Image source={watering} style={style.image} resizeMode='contain' />
        <Text style={style.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <TouchableOpacity activeOpacity={0.8} style={style.button}>
          <Feather name='chevron-right' size={32} color='#fff' />
        </TouchableOpacity>
      </View>
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
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
    marginTop: 40,
    textAlign: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
})

export default Wellcome
