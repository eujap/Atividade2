import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from './componentes/Title/index';
import Main from './componentes/Main/index';

export default function App (){
  return(
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
