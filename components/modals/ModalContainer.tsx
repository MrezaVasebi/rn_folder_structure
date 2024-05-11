import React from "react";
import {
  Modal,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

interface IModalContainer {
  rootStyle?: StyleProp<ViewStyle>;
}

const ModalContainer = (props: ViewProps & IModalContainer) => {
  return (
    <Modal transparent animationType="fade" statusBarTranslucent>
      <View style={[styles.rootStyle, props.rootStyle]}>{props.children}</View>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
});
