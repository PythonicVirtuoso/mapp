import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddMessage(props) {
  [text, setText] = useState("");
  const handleChangeText = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="..."
        onChangeText={handleChangeText}
        value={text}
      />
      <Button
        disabled={!text}
        color="coral"
        onPress={() => props.onSubmit(text)}
        title="SEND"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
