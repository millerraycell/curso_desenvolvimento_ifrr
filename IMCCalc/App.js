import React from 'react';
import {AppLoading} from 'expo'
import {StatusBar} from 'react-native'
import {Roboto_400Regular, Roboto_500Medium ,Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto'
import {Archivo_400Regular, Archivo_500Medium, Archivo_700Bold} from '@expo-google-fonts/archivo'

import Routes from './src/routes'

export default function App() {
  let [fontsloaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Archivo_400Regular, 
    Archivo_700Bold,
    Archivo_500Medium
  })

  if(!fontsloaded){
    return <AppLoading />
  }else{
    return (
      <>
        <Routes />
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      </>
    );
  }
}

