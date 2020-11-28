import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { Gyroscope } from 'expo-sensors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FOO</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo label="really the path is" path="/screens/TabOneScreen.tsx" />
        <Text>1AAAAAAfter TabOneScreen</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 222,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 5,
    width: '10%',
  },
});
