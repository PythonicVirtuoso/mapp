import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { MenuView } from "@react-native-menu/menu";

export default function MessageItem(props) {
  return (
    <View style={styles.container}>
      <MenuView
        title="Menu Title"
        onPressAction={({ nativeEvent }) => {
          console.warn(JSON.stringify(nativeEvent));
        }}
        actions={[
          {
            id: "add",
            titleColor: "#2367A2",
            image: Platform.select({
              ios: "plus",
              android: "ic_menu_add",
            }),
            imageColor: "#2367A2",
            subactions: [
              {
                id: "nested1",
                title: "Nested action",
                titleColor: "rgba(250,180,100,0.5)",
                subtitle: "State is mixed",
                image: Platform.select({
                  ios: "heart.fill",
                  android: "ic_menu_today",
                }),
                imageColor: "rgba(100,200,250,0.3)",
                state: "mixed",
              },
              {
                id: "nestedDestructive",
                title: "Destructive Action",
                attributes: {
                  destructive: true,
                },
                image: Platform.select({
                  ios: "trash",
                  android: "ic_menu_delete",
                }),
              },
            ],
          },
          {
            id: "share",
            title: "Share Action",
            titleColor: "#46F289",
            subtitle: "Share action on SNS",
            image: Platform.select({
              ios: "square.and.arrow.up",
              android: "ic_menu_share",
            }),
            imageColor: "#46F289",
            state: "on",
          },
          {
            id: "destructive",
            title: "Destructive Action",
            attributes: {
              destructive: true,
            },
            image: Platform.select({
              ios: "trash",
              android: "ic_menu_delete",
            }),
          },
        ]}
        shouldOpenOnLongPress={true}
      >
        <View style={styles.item}>
          <Text style={styles.item}>{props.item.text} </Text>
          <Text> {props.item.time}</Text>
        </View>
        ;
      </MenuView>
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
