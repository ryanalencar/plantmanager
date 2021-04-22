import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native'

import watering from '../assets/watering.png'

function Wellcome(): any {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Gerencie suas plantas de forma fácil</Text>
      <Image source={watering} />
      <Text>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <TouchableOpacity>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default Wellcome
