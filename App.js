// basic import of files and libraries
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MessageItem from "./components/messageItem";
import AddMessage from "./components/addMessage";

// exports the function "App" as a component/file(?)
export default function App() {
  // creates a value, and a function to update that value by using useState
  const [messages, setMessages] = useState([]);

  // creates an arrow function with a parameter so it can receive a value
  const handleMessageSubmit = (text) => {
    /* this takes the value that was passed in, then takes the function "setText"
       from the "addMessage" file, so it can set the text value that was passed in
       update the state of the script/file/variable(?)
    */
    setText("");
    /* this takes the value from text and passes it onto the "messages" value, then
       updates the value of the script/file/variable(?)
    */
    setMessages([text, ...messages]);
  };

  // this returns components to the UI(?)
  return (
    // basic styles
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          {/*Passes an object to the AddMessage function. The value of the
          object "handleMessageSubmit" can then be used inside the AddMessage
          function. */}
          <AddMessage onSubmit={handleMessageSubmit} />
          {/* uses a FlatList component to render and display data */}
          <FlatList
            // gives the component its data
            data={messages}
            /* renders each item of data by giving it to the "MessageItem"
               component function, which customises each item of the array */
            renderItem={({ item }) => <MessageItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}

//creates style objects
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
