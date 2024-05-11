import React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

interface IViewContainer {
  rootStyle?: StyleProp<ViewStyle>;
}

const ViewContainer = (props: ViewProps & IViewContainer) => {
  return (
    <View style={[styles.rootStyle, props.rootStyle]}>{props.children}</View>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
});
