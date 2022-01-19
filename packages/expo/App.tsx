import React, { useState } from 'react'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { HelloWorld } from 'app/hello-world'

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

enableScreens(true)

export default function App() {
  const loadFonts = async () => {
    await Font.loadAsync({
      'my-font-regular': require('../app/assets/Amatic_Regular.ttf')
    })
  }
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    console.log("FONT NOT LOADED")
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => { console.log("DONE LOADING");setFontLoaded(true)}}
        onError={(err) => console.error(err)}
      />
    )
  }
  console.log("FONT IS LOADED, RETURN APP")
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <HelloWorld />
      </SafeAreaProvider>
    </ApplicationProvider>
  )
}
