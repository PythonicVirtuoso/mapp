//basic imports
import React from "react";
import { StyleSheet, Text } from "react-native";

/*
exports the function "MessageItem" as a component/file(?)
*/
export default function MessageItem(props) {
  /* takes each item its given and uses the "item" object to give it style,
     then it passes the object as an argument of the component(?)
  */
  return <Text style={styles.item}>{props.item}</Text>;
}

// styles
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
});
