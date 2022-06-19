import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MessageItem from "./components/messageItem";
import AddMessage from "./components/addMessage";

export default function App() {
  const [messages, addMessages] = useState([]);

  const pressHandler = (key) => {
    addMessages((prevMessages) => {
      return prevMessages;
    });
  };

  const submitHandler = (text) => {
    setText("");
    addMessages((prevMessages) => {
      return [{ text, key: Math.random().toString() }, ...prevMessages];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <AddMessage submitHandler={submitHandler} />
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <MessageItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {},
});
