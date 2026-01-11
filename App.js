
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FinalReservationScreen from './FinalReservationScreen';


const Stack = createNativeStackNavigator(); // creates a stack navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FinalReservation" component={FinalReservationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 



