import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import EditScreenInfo from '../components/EditScreenInfo';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://images-cdn.9gag.com/photo/aAVwLRR_700b.jpg" }} style={{ width: 305, height: 159 }} />
      <Text style={styles.title}>bar</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo label="the path is" path="/screens/TabTwoScreen.tsx" />
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
    height: 1,
    width: '80%',
  },
})
