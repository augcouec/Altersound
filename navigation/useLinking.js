import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "root",
        screens: {
          Loading: "loading",
          Login: "login",
          SignUp: "signup",
          Home: "home",
          Links: "links",
          Player: "player",
          Settings: "settings"
        }
      }
    }
  });
}
