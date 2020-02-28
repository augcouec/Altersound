import React, { Component } from "react";

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import ToggleSwitch from "toggle-switch-react-native";

export default class Account extends Component {
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false
  };

  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Image
            style={styles.account_image_logo}
            source={require("../assets/images/icon.png")}
          />
          <Text style={styles.account_tittle_under}>Mon compte</Text>
          <View style={{ marginVertical: wp("5%") }}>
            <ToggleSwitch
              onColor="#EF1B43"
              offColor="#222534"
              label="Notification"
              labelStyle={{
                color: "#FFF",
                marginRight: wp("40%"),
                fontSize: 16
              }}
              size="default"
              isOn={this.state.isOnDefaultToggleSwitch}
              onToggle={isOnDefaultToggleSwitch => {
                this.setState({ isOnDefaultToggleSwitch });
                this.onToggle(isOnDefaultToggleSwitch);
              }}
            />
          </View>
          <View style={styles.account_line} />
          <TouchableOpacity>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Prénom"
              placeholderTextColor="#FFF"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              placeholderTextColor="#FFF"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Adresse mail"
              placeholderTextColor="#FFF"
            />
          </TouchableOpacity>
          <View style={styles.account_line} />

          <TouchableOpacity style={styles.playlist_button}>
            <Text style={styles.playlist_button_text}>Deconnexion</Text>
          </TouchableOpacity>
          <View style={styles.account_line} />
          <TouchableOpacity>
            <Text style={styles.account_text_item}>
              Politique de confidentialité
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.account_text_item}>Supprimer mon compte</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#141623"
  },
  account_tittle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "normal",
    fontSize: 24,
    marginTop: 50
  },
  account_image_logo: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginRight: "auto",
    marginBottom: 10,
    marginLeft: "auto"
  },
  account_tittle_under: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "normal",
    fontSize: 24,
    marginBottom: 20
  },
  account_text_item: {
    color: "#FFF",
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 16,
    marginBottom: 20
  },
  account_text_item_deconnexion: {
    color: "#EF1B43",
    textAlign: "left",
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 16,
    marginBottom: 20
  },
  account_line: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textInput: {
    width: 200,
    height: 50,
    padding: 5,
    fontSize: 15,
    width: "90%",
    color: "#FFF",
    marginBottom: 10
  },
  playlist_button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#EF1B43",
    marginTop: 10,
    marginBottom: 30,
    width: wp("85%"),
    height: 40,
    borderRadius: 40,
    justifyContent: "center"
  },

  playlist_button_text: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 18
  }
});
