import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FinalNav = () => {
  return (
    <View style={styles.container}>
      <Text>Final Nav</Text>
    </View>
  );
};

export default FinalNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
