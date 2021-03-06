import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/Impact";
import PlayerScreen from "../screens/PlayerScreen";
import PlayerPlaylist from "../screens/PlayerPlaylist";
import Favorites from "../screens/Favorites";
import PlaylistDiscover1 from "../screens/PlaylistDiscover1";
import PlaylistDiscover2 from "../screens/PlaylistDiscover2";
import PlaylistDiscover3 from "../screens/PlaylistDiscover3";
import PlaylistDiscover4 from "../screens/PlaylistDiscover4";
import PlayerScreen1 from "../screens/PlayerScreen1";
import PlayerScreen2 from "../screens/PlayerScreen2";
import PlayerScreen3 from "../screens/PlayerScreen3";
import PlayerScreen4 from "../screens/PlayerScreen4";
import PlayerScreen5 from "../screens/PlayerScreen5";
import PlayerScreen6 from "../screens/PlayerScreen6";
import PlayerScreen7 from "../screens/PlayerScreen7";
import PlayerScreen8 from "../screens/PlayerScreen8";
import PlayerScreen9 from "../screens/PlayerScreen9";
import PlayerScreen10 from "../screens/PlayerScreen10";
import Account from "../screens/Account";

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
        name="Playlist Chill"
        component={PlaylistDiscover1}
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
        name="Playlist Jazz"
        component={PlaylistDiscover2}
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
        name="Playlist Hip-Hop"
        component={PlaylistDiscover3}
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
        name="Playlist Rock"
        component={PlaylistDiscover4}
      />
    </Tab.Navigator>
  );
}

function player() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Weekly Playlist"
        component={PlayerPlaylist}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="Player"
        component={PlayerScreen}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen1"
        component={PlayerScreen1}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen2"
        component={PlayerScreen2}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen3"
        component={PlayerScreen3}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen4"
        component={PlayerScreen4}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen5"
        component={PlayerScreen5}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen6"
        component={PlayerScreen6}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen7"
        component={PlayerScreen7}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen8"
        component={PlayerScreen8}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen9"
        component={PlayerScreen9}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "",
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
        name="PlayerScreen10"
        component={PlayerScreen10}
      ></Tab.Screen>
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
        name="Favoris"
        component={Favorites}
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
          },
          title: "Favoris",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="e" />
        }}
      />
      <BottomTab.Screen
        name="player"
        component={player}
        options={{
          title: "Player",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="a" />
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
        component={Account}
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="d" />
        }}
      />
    </BottomTab.Navigator>
  );
}
