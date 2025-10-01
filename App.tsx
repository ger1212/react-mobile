import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/image.jpg')}
      style={styles.background}
      resizeMode="cover"
      imageStyle={{ alignSelf: 'flex-start' }} 
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Your Next Adventure{"\n"}Starts Here
        </Text>
        <Text style={styles.subtitle}>
          Life’s too short to stay in one place. Find your next favorite city,
          beach, or mountain and let's get moving!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    width: width,
    height: height,
  },
  overlay: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fad505d8',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f5ededec',
    fontSize: 16,
    fontWeight: '600',
  },
});