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

export default function Impact() {
  return (
    <View style={styles.container}>
      <Text style={styles.page_title}>Votre impact positif </Text>
      <Text
        name="impact"
        style={{
          fontFamily: "icomoon",
          color: "#EF1B43",
          fontSize: 50,
          textAlign: "center"
        }}
      >
        b
      </Text>
      <Text style={styles.info_text}>Vous avez consommé </Text>
      <Text style={styles.info_conso}> 1.03GO</Text>

      <Text style={styles.info_text}>
        En moyenne, sur une autre pateforme de streaming musicale, vous auriez
        consommé 1,5 Go
      </Text>
      <Text style={styles.info_text}>
        Cette économie représente l’équivalent de la consommation en CO2 :
      </Text>
      <Text
        name="impact"
        style={{
          fontFamily: "icomoon",
          color: "#EF1B43",
          fontSize: 120,
          textAlign: "center"
        }}
      >
        f
      </Text>
      <Text style={styles.info_text}>
        d’un trajet Bordeaux - Lyon en voiture
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141623",
    height: hp("90%"),
    paddingVertical: wp("10%")
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
  }
});
