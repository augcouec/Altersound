import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Button,
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

export default function PlayerPlaylist() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          style={styles.albumCoverHeader}
          source={require("../assets/images/Chill-B.jpg")}
          contain="cover"
        />
        <View style={styles.header_container}>
          <Text style={styles.playlist_name}> Chill </Text>
          <Text style={styles.playlist_size}> 70 Titres - 240 Mo </Text>
        </View>

        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Dj Quads - Birds And The Bees </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> If only you knew - Vorsa </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Lakey inspired - Chill Day </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Ehrling - Clouds </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Lucy’s song - Ryan Little </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Good for you - THBD </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Infinity - Lemmino </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Wig Of Steel - S Strong </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>

        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Lakey inspired - Chill Day </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Ehrling - Clouds </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
        <View style={styles.cards_song}>
          <Text style={styles.song_name}> Lucy’s song - Ryan Little </Text>
          <Text
            name="impact"
            style={{
              fontFamily: "icomoon",
              color: "#FFF",
              fontSize: 16,
              textAlign: "center"
            }}
          >
            e
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141623"
  },
  header_container: {
    flex: 1,
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("5%"),
    marginVertical: wp("5%")
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
    marginRight: wp("5%"),
    fontWeight: "bold"
  },
  song_weight: {
    color: "#FFF",
    marginLeft: 10,
    fontFamily: "poppinsLight",
    position: "absolute",
    right: 0,
    marginHorizontal: wp("5%")
  },
  cards_song: {
    flex: 1,
    width: wp("90%"),
    marginHorizontal: wp("5%"),
    flexDirection: "row",
    marginVertical: wp("3%"),
    justifyContent: "space-between"
  },
  albumCoverHeader: {
    width: wp("100%"),
    height: wp("80%"),
    marginRight: "auto",
    marginBottom: 10,
    marginLeft: "auto"
  },
  playlist_name: {
    fontFamily: "poppins",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFF"
  },
  playlist_size: {
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 16,
    color: "#B6B5B5"
  }
});