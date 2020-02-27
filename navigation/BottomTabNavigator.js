import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/Impact";
import PlayerScreen from "../screens/PlayerScreen";
import PlaylistDiscover1 from "../screens/PlaylistDiscover1";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

const Tab = createStackNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#141623",
            shadowRadius: 0,
            shadowOffset: {
              height: 0
            }
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "poppins",
            fontSize: 20
          }
        }}
        name="AlterSound"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#141623",
            shadowRadius: 0,
            shadowOffset: {
              height: 0
            }
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "poppins",
            fontSize: 20
          }
        }}
        name="PlaylistDiscover1"
        component={PlaylistDiscover1}
      />
    </Tab.Navigator>
  );
}

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
        component={Home}
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
