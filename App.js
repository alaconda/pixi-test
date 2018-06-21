import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ExpoPixi from 'expo-pixi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <ExpoPixi.Sketch
            strokeColor={'#000'}
            strokeWidth={3}
            strokeAlpha={0.8}
            style={{ width: 200, height: 200, borderWidth: 2, borderColor: '#ddd', backgroundColor: '#fff', marginTop: 15, marginLeft: 15 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
