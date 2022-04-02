//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component

//Routes import

import Routes from "./src/Navigation/Routes";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
};

//make this component available to the app
export default App;
