import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  return (
    <Text
      name={props.name}
      style={{
        fontFamily: "icomoon",
        color: props.focused ? Colors.tabIconSelected : Colors.tabIconDefault,
        fontSize: 20
      }}
    >
      {props.name}
    </Text>
  );
}
