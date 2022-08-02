import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MessageItem from "./components/messageItem";
import AddMessage from "./components/addMessage";
import { Provider } from "react-native-paper";

export default function App() {
  const [messages, setMessages] = useState([]);

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const time = `Today at ${hours}, ${minutes}`;

  const pressHandler = (indexToDelete) => {
    const filteredMessages = messages.filter((_, index) => {
      const shouldMessageBeDeleted = index != indexToDelete;
      return shouldMessageBeDeleted;
    });
    setMessages(filteredMessages);
  };

  const handleMessageSubmit = (text) => {
    setText("");
    const newMessageObject = { text: text, time: time };

    setMessages([newMessageObject, ...messages]);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.list}>
            <AddMessage onSubmit={handleMessageSubmit} />
            <FlatList
              data={messages}
              renderItem={({ item, index }) => (
                <MessageItem
                  item={item}
                  pressHandler={pressHandler}
                  index={index}
                />
              )}
            />
          </View>
        </View>
      </View>
    </Provider>
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
