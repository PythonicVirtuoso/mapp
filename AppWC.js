/*import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MessageItem from "./components/messageItem";
import AddMessage from "./components/addMessage";

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (text) => {
    setText("");
    setMessages((prevMessages) => {
      return [{ text, date: new Date().toDateString() }, ...prevMessages];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <AddMessage onSubmit={handleMessageSubmit} />
          <FlatList
            data={messages}
            renderItem={({ item }) => <MessageItem item={item} />}
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
*/
