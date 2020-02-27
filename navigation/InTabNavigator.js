import * as React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "@react-navigation";
import HomeScreen from "../screens/HomeScreen";
import PlaylistDiscover1 from "../screens/PlaylistDiscover1";

export default createStackNavigator({
  HomeScreen,
  PlaylistDiscover1
});
