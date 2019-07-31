import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Base from './src/component/Base';

export default function App() {
  return (
    <View style={styles.container}>
      <Base></Base>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
