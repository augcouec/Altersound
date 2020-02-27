import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default function PlaylistDiscover1() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableOpacity style={styles.cards_song}>
          <Text style={styles.song_name}> Dj Quads - Birds And The Bees </Text>
          <Text style={styles.song_weight}> 120 Mo </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards_song}>
          <Text style={styles.song_name}> Dj Quads - Birds And The Bees </Text>
          <Text style={styles.song_weight}> 120 Mo </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards_song}>
          <Text style={styles.song_name}> Dj Quads - Birds And The Bees </Text>
          <Text style={styles.song_weight}> 120 Mo </Text>
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
    fontSize: 20,
    color: "#FFF",
    marginVertical: wp("10%")
  },
  info_text: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: wp("2%"),
    textAlign: "center",
    marginTop: wp("10%"),
    marginHorizontal: wp("10%")
  },
  info_conso: {
    fontSize: 18,
    color: "#EF1B43",
    textAlign: "center"
  },
  song_name: {
    color: "#fff",
    marginHorizontal: wp("5%"),
    fontWeight: "bold"
  },
  song_weight: {
    color: "#FFF",
    marginLeft: 10,
    fontFamily: "poppinsLight"
  },
  cards_song: {
    flex: 1,
    width: wp("95%"),
    marginHorizontal: wp("2.5%"),
    flexDirection: "row",
    marginVertical: wp("3%")
  }
});
