import { StyleSheet, View } from 'react-native';
import Navigator from './src/config/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



















// Camera integration.
/*
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {

  let camera;

  // states.
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [currentImage, setCurrentImage] = useState();

  if (!permission) {
    return <Text>Camera permissions required</Text>
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5 };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      alert('capture')
      setCurrentImage(data.uri)
    }
  }


  return (

    <View style={styles.container}>
      {currentImage ?
        <View style={styles.camera}>
          <Image style={styles.camera} source={{ uri: currentImage }} />
          <Button title="Take new picture" onPress={() => setCurrentImage()} />
        </View>
        :
        <Camera ref={ref => camera = ref} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Image style={styles.image} source={{ uri: 'https://static.thenounproject.com/png/99970-200.png' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Image style={styles.image} source={{ uri: 'https://expertizo.pk/img/logo-alt.png' }} />
            </TouchableOpacity>
            <View style={styles.button} />
          </View>
        </Camera>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 40
  },
  button: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 120,
    height: 80
  }
});
*/
// Camera integration.
