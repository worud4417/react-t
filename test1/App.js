import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';

import MainText from './src/component/MainText';
import TextBox from './src/component/TextBox';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <MainText></MainText>
      <TextBox></TextBox>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
