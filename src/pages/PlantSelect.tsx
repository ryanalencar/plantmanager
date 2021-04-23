import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

import colors from '../styles/colors'

function PlantSelect() {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>Olá, Ryan</Text>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
})

export default PlantSelect
