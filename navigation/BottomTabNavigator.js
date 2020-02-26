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
        activeBackgroundColor: "#1D1D1D",
        inactiveBackgroundColor: "#1D1D1D"
      }}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-home" />
          )
        }}
      />
      <BottomTab.Screen
        name="consomation"
        component={LinksScreen}
        options={{
          title: "consomation",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          )
        }}
      />
      <BottomTab.Screen
        name="account"
        component={LinksScreen}
        options={{
          title: "account",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-settings" />
          )
        }}
      />
      <BottomTab.Screen
        name="player"
        component={PlayerScreen}
        options={{
          title: "player",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-play" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}
