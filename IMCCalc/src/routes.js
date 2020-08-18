import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "./pages/Home"
import Resultado from "./pages/Resultado";

const { Navigator, Screen } = createStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown : false}}>
        <Screen name = "Home" component={Home}/>
        <Screen name = "Resultado" component={Resultado}/>
      </Navigator>  
    </NavigationContainer>
  );  
};

export default Routes;