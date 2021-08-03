import React from 'react';
import { StyleSheet } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#8E2DE2','#4A00E0']} style={styles.container}>
      <Title/>
      <Form/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:80,
  },

});


