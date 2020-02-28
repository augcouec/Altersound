import * as React from "react";
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

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.page_title}>Vos Favoris</Text>
      <Text style={styles.page_subtitle}>
        Retrouvez ici le titre de vos musiques favorites même après leur
        suppression
      </Text>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableOpacity style={styles.cards_song}>
          <Image
            style={{ width: wp("10%"), height: wp("10%") }}
            resizeMode="cover"
            source={require("../assets/images/Chill.png")}
          />
          <Text style={styles.song_title}>
            <B>Dj Quads</B> - Birds And The Bees{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards_song}>
          <Image
            style={{ width: wp("10%"), height: wp("10%") }}
            resizeMode="cover"
            source={require("../assets/images/Jazz-B.jpg")}
          />
          <Text style={styles.song_title}>
            <B>Lemmino</B> - Infinity{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards_song}>
          <Image
            style={{ width: wp("10%"), height: wp("10%") }}
            resizeMode="cover"
            source={require("../assets/images/POP.png")}
          />
          <Text style={styles.song_title}>
            <B>Ryan Little</B> - Lucy’s Song{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards_song}>
          <Image
            style={{ width: wp("10%"), height: wp("10%") }}
            resizeMode="cover"
            source={require("../assets/images/RAP.png")}
          />
          <Text style={styles.song_title}>
            <B>Lemmino</B> - Infinity
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const B = props => <Text style={{ fontWeight: "bold" }}>{props.children}</Text>;

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
    marginTop: wp("15%")
  },
  page_subtitle: {
    color: "#FFF",
    fontFamily: "poppinsLight",
    textAlign: "center",
    width: wp("95%"),
    marginVertical: wp("10%"),
    marginHorizontal: wp("2.5%")
  },

  song_title: {
    color: "#fff",
    marginHorizontal: wp("5%")
  },

  cards_song: {
    flex: 1,
    width: wp("95%"),
    marginHorizontal: wp("2.5%"),
    flexDirection: "row",
    marginVertical: wp("3%"),
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
