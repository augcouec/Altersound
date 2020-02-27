import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.page_title}>
          Nouvelle playlists dans : 5 jours{" "}
        </Text>

        <TouchableOpacity style={styles.card}>
          <Image
            style={{ width: wp("20%"), height: wp("30%") }}
            resizeMode="cover"
            source={require("../assets/images/Chill.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.card_title}> Chill</Text>

            <Text style={styles.song_title}>
              Dj Quads - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>Lemmino - Infinity </Text>
            <Text style={styles.song_title}>Ryan Little - Lucy’s Song </Text>
          </View>
          <Ionicons
            style={styles.card_icon}
            name="ios-play-circle"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={{ width: wp("20%"), height: wp("30%") }}
            resizeMode="cover"
            source={require("../assets/images/Jazz.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.card_title}> Jazz</Text>

            <Text style={styles.song_title}>
              Dj Quads - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>Lemmino - Infinity </Text>
            <Text style={styles.song_title}>Ryan Little - Lucy’s Song </Text>
          </View>
          <Ionicons
            style={styles.card_icon}
            name="ios-play-circle"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={{ width: wp("20%"), height: wp("30%") }}
            resizeMode="cover"
            source={require("../assets/images/RAP.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.card_title}> Hip-Hop</Text>

            <Text style={styles.song_title}>
              Dj Quads - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>Lemmino - Infinity </Text>
            <Text style={styles.song_title}>Ryan Little - Lucy’s Song </Text>
          </View>
          <Ionicons
            style={styles.card_icon}
            name="ios-play-circle"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={{ width: wp("20%"), height: wp("30%") }}
            resizeMode="cover"
            source={require("../assets/images/POP.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.card_title}> Rock</Text>

            <Text style={styles.song_title}>
              Dj Quads - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>Lemmino - Infinity </Text>
            <Text style={styles.song_title}>Ryan Little - Lucy’s Song </Text>
          </View>
          <Ionicons
            style={styles.card_icon}
            name="ios-play-circle"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141623"
  },
  page_title: {
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFF",
    marginVertical: wp("10%")
  },
  card: {
    flex: 1,
    backgroundColor: "#222534",
    width: wp("95%"),
    height: wp("30%"),
    margin: wp("2.5%"),
    flexDirection: "row"
  },
  card_text: {
    marginHorizontal: wp("2%")
  },
  card_title: {
    fontSize: 18,
    color: "#FFF",
    marginVertical: wp("2%")
  },
  song_title: {
    color: "#FFF",
    fontSize: 14
  },
  card_icon: {
    marginTop: wp("2%"),
    marginLeft: wp("6%")
  }
});
