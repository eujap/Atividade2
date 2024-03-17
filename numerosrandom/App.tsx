import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from './componentes/Title/index';

import Form from "./componentes/Form";

export default function App (){
  return(
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 80,
  }
})
