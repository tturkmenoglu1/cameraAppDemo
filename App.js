import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CameraComp from './src/components/CameraComp';
import { TouchableOpacity } from 'react-native';

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
        <CameraComp />
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
            onPress={setCameraOpen(true)}
          >
            <Icon name="camera" size={50} color="black" />
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

