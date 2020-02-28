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
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

import { MonoText } from "../components/StyledText";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.page_title}>Nouvelle playlists dans : </Text>
        <Text style={styles.page_title_countdown}>J-5 </Text>

        <Text style={styles.card_title}> Chill</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("Home", { screen: "Playlist Chill" })
          }
        >
          <Image
            style={styles.card_image}
            resizeMode="cover"
            source={require("../assets/images/Chill.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.song_title}>
              <B>Dj Quads</B> - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Ryan Little</B> - Lucy’s Song{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
          </View>
          <AntDesign
            style={styles.card_icon}
            name="download"
            size={20}
            color="#FFF"
          />
        </TouchableOpacity>
        <Text style={styles.card_title}> Jazz</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("Home", { screen: "Playlist Jazz" })
          }
        >
          <Image
            style={styles.card_image}
            resizeMode="cover"
            source={require("../assets/images/Jazz.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.song_title}>
              <B>Dj Quads</B> - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Ryan Little</B> - Lucy’s Song{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
          </View>
          <AntDesign
            style={styles.card_icon}
            name="download"
            size={20}
            color="#FFF"
          />
        </TouchableOpacity>
        <Text style={styles.card_title}> Rap</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Playlist Hip-Hop"
            })
          }
        >
          <Image
            style={styles.card_image}
            resizeMode="cover"
            source={require("../assets/images/RAP.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.song_title}>
              <B>Dj Quads</B> - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Ryan Little</B> - Lucy’s Song{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
          </View>
          <AntDesign
            style={styles.card_icon}
            name="download"
            size={20}
            color="#FFF"
          />
        </TouchableOpacity>
        <Text style={styles.card_title}> Pop</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("Home", { screen: "Playlist Rock" })
          }
        >
          <Image
            style={styles.card_image}
            resizeMode="cover"
            source={require("../assets/images/POP.png")}
          />
          <View style={styles.card_text}>
            <Text style={styles.song_title}>
              <B>Dj Quads</B> - Birds And The Bees{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Ryan Little</B> - Lucy’s Song{" "}
            </Text>
            <Text style={styles.song_title}>
              <B>Lemmino</B> - Infinity{" "}
            </Text>
          </View>
          <AntDesign
            style={styles.card_icon}
            name="download"
            size={20}
            color="#FFF"
          />
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
    fontWeight: "600",
    fontSize: 24,
    color: "#FFF",
    marginTop: 30
  },
  page_title_countdown: {
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "bold",
    fontSize: 32,
    color: "#FFF",
    marginBottom: 30
  },
  card: {
    flex: 1,
    backgroundColor: "#222534",
    width: wp("95%"),
    height: wp("30%"),
    margin: wp("2.5%"),
    flexDirection: "row",
    borderRadius: 10
  },
  card_text: {
    marginHorizontal: wp("2%"),
    paddingTop: 10,
    paddingLeft: 15
  },
  card_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
    marginBottom: 3,
    marginLeft: 5
  },
  song_title: {
    textAlign: "left",
    fontFamily: "Helvetica Neue",
    fontWeight: "300",
    color: "#FFF",
    fontSize: 13,
    lineHeight: 25
  },
  card_icon: {
    marginTop: wp("2%"),
    marginLeft: wp("5%")
  },
  card_image: {
    width: wp("25%"),
    height: wp("30%")
  }
});
