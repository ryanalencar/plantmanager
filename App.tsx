/* eslint-disable camelcase */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, View } from 'react-native'
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'

import Wellcome from './src/pages/Wellcome'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })

  if (!fontsLoaded) return <AppLoading />

  return <Wellcome />
}
