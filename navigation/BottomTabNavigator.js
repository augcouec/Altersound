import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import PlayerScreen from "../screens/PlayerScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#222534",
        inactiveBackgroundColor: "#222534",
        activeTintColor: "#EF1B43",
        inactiveTintColor: "#FFF",
        showLabel: false,
        style: {
          borderTopWidth: 0
        }
      }}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          title: "Home",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="c" />
        }}
      />
      <BottomTab.Screen
        name="Consomation"
        component={LinksScreen}
        options={{
          title: "Consomation",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="b" />
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={LinksScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="d" />
        }}
      />
      <BottomTab.Screen
        name="player"
        component={PlayerScreen}
        options={{
          title: "Player",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="a" />
        }}
      />
    </BottomTab.Navigator>
  );
}
