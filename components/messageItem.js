import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Menu, Divider, Provider } from "react-native-paper";

export default function MessageItem(props) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.item}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={() => openMenu}>
              <Text style={styles.item}>{props.item.text} </Text>
              <Text> {props.item.time}</Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
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
