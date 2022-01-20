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
  React.useEffect(() => {
    Font.loadAsync({
      'Amatic_Regular': require("../app/resources/Amatic_Regular.ttf")
    }).then((ele) => {
      setFontLoaded(true)
    }).catch((e) => {
      console.log(e, "e")
    })
  },[])
  
  const [fontLoaded, setFontLoaded] = useState(false);


  if (!fontLoaded) {
    console.log("FONT NOT LOADED")
    return (
      <AppLoading/>
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
