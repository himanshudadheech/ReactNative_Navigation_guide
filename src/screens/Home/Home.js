//import liraries
import React, { Component } from "react";
import { View, Text } from "react-native";

// create a component
import styles from "./styles";
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen Content</Text>
    </View>
  );
};

//make this component available to the app
export default Home;
