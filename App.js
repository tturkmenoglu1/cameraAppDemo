import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import CameraComp from './src/components/CameraComp';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from './src/components/Button';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isCameraOpen, setCameraOpen] = useState(false);

  const handleCameraPress = () => {
    setCameraOpen(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Ana ekran içeriği */}
      {isCameraOpen ? (
        <>
        <Button
          title=""
          icon="cross"
          onPress={() => {
            setCameraOpen(false);
          }}
        />
        <CameraComp />
        
        </>
      ) : (
        <>
          {/* Kamera simgesi */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: [{ translateX: -25 }],
            }}
            onPress={handleCameraPress}
            >
              <Ionicons name='camera' size={50}/>
              <Text>
                Tap tp open camera
              </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

