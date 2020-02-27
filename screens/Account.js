import * as React from "react";
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


export default function Account() {
  return (

    <View style={styles.container}>
    <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    >

    <Text style={styles.account_tittle}>Mon compte</Text>
    <Image
    style={styles.account_image_logo}
    source={require("../assets/images/icon.png")}
/>
  <Text style={styles.account_tittle_under}>altersound</Text>

    <Text style={styles.account_text_item}>Notification</Text>

      <View style={styles.account_line}/>
        <TouchableOpacity>
        <Text style={styles.account_text_item}>Prénom</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.account_text_item}>Mot de passe</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.account_text_item}>E-mail</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={styles.account_text_item}>Supprimer mon compte</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.account_text_item_deconnexion}>Déconnexion</Text>
                  </TouchableOpacity>

                  <View style={styles.account_line}/>
                    <TouchableOpacity>
                    <Text style={styles.account_text_item}>Politique de confidentialité</Text>
                      </TouchableOpacity>



                      </ScrollView>
                      </View>
                    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 15,
    backgroundColor: "#141623"
  },
  account_tittle:{
    color:"#FFF",
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "normal",
    fontSize: 24,
    marginTop:50
  },
  account_image_logo:{
    width: 100,
    height: 100,
    marginTop: 30,
    marginRight: "auto",
    marginBottom: 10,
    marginLeft: "auto"
  },
  account_tittle_under:{
    color:"#FFF",
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "normal",
    fontSize: 24,
    marginBottom: 20,
  },
  account_text_item:{
    color:"#FFF",
    textAlign: "left",
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 16,
    marginBottom:20
  },
  account_text_item_deconnexion:{
    color:"#EF1B43",
    textAlign: "left",
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 16,
    marginBottom:20
  },
  account_line:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 20,
  }
});
