// basic imports
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

// exports the function AddMessage as component/file(?)
export default function AddMessage(props) {
  // creates a value and a function to update the value with useState
  [text, setText] = useState("");

  /* arrow function that takes whatever is written into textInput box and uses
     setText to update the state of that value in the script.
  */
  const handleChangeText = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="..."
        // takes the text that is changed and passes it to "handleChangeText"
        onChangeText={handleChangeText}
        // updates the state value in the TextInput box(?)
        value={text}
      />
      {/* creates a button, and makes it so when you press it, the
          "handleMessageSubmit" function is called, by passing the key of the
          object and a parameter into the "AddMessage" function. (I think its an
          object, but not sure where the object was created?)
      */}
      <Button color="coral" onPress={() => props.onSubmit(text)} title="SEND" />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
