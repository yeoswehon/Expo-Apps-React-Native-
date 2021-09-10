import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log ("App executed");

  return (
    <View style={styles.container}>
      <Text>Hello React Native! - A really long text. I want to make this longer and see what happgggggggggggggggggggggggggggggggens!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
