/* eslint-disable camelcase */
import React from 'react'
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'

import Confirmation from './src/pages/Confirmation'
import Wellcome from './src/pages/Wellcome'
import UserIdentification from './src/pages/UserIdentification'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })

  if (!fontsLoaded) return <AppLoading />

  return <Confirmation />
}
