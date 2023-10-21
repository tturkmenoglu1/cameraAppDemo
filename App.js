import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Camera from './src/components/CameraComp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Camera'
          component={Camera}
          options={{title:"Go to Camera"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

