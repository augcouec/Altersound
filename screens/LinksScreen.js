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

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.page_title}>Votre impact positif </Text>
        <Image
          style={{
            width: wp("25%"),
            height: wp("25%"),
            marginHorizontal: wp("37.5%"),
            borderRadius: 10
          }}
          resizeMode="cover"
          source={require("../assets/images/Conso_img.png")}
        />
        <Text style={styles.info_text}>Vous avez consommé </Text>
        <Text style={styles.info_conso}> 1.03GO</Text>

        <Text style={styles.info_text}>
          En moyenne, sur une autre pateforme de streaming musicale, vous auriez
          consommé 1,5 Go
        </Text>
        <Text style={styles.info_text}>
          Cette économie représente l’équivalent de la consommation en CO2 :
        </Text>
        <Image
          style={{
            width: wp("25%"),
            height: wp("25%"),
            marginHorizontal: wp("37.5%"),
            borderRadius: 10
          }}
          resizeMode="cover"
          source={require("../assets/images/Conso_img.png")}
        />
        <Text style={styles.info_text}>
          d’un trajet Bordeaux - Lyon en voiture
        </Text>
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
  }
});
