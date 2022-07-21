import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MessageItem(props) {
  //console.log(props);

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => props.pressHandler(props.index)}>
        <Text style={styles.item}>{props.item.text} </Text>
        <Text> {props.item.time}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: "column",
  },
});
