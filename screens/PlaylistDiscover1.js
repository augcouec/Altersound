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

export default function PlaylistDiscover1() {
  return (


    <View style={styles.container}>
    <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}>
    <Image style={styles.albumCover} source={{uri: "https://m.media-amazon.com/images/I/91pR-YHwP5L._SS500_.jpg"}}/>

    <Text style={styles.playlist_name}> Chill </Text>
    <Text style={styles.playlist_size}> 70 Titres - 240 Mo </Text>

    <TouchableOpacity style = {{ alignItems :'center'}}onPress = {() => {/* Bon */}}>
  <View style={styles.playlist_button}><Text style ={styles.playlist_button_text}>Télécharger</Text></View>
    </TouchableOpacity>


    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Dj Quads - Birds And The Bees </Text>
    <Text style={styles.song_weight}> 3,5 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> If only you knew - Vorsa </Text>
    <Text style={styles.song_weight}> 4,1 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Lakey inspired - Chill Day </Text>
    <Text style={styles.song_weight}> 3,1 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Ehrling - Clouds </Text>
    <Text style={styles.song_weight}> 3,7 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Lucy’s song - Ryan Little </Text>
    <Text style={styles.song_weight}> 2,7 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Good for you - THBD </Text>
    <Text style={styles.song_weight}> 5,2 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Infinity - Lemmino </Text>
    <Text style={styles.song_weight}> 4,6 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Wig Of Steel - S Strong </Text>
    <Text style={styles.song_weight}> 3,9 Mo </Text>
    </TouchableOpacity>




    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Lakey inspired - Chill Day </Text>
    <Text style={styles.song_weight}> 3,1 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Ehrling - Clouds </Text>
    <Text style={styles.song_weight}> 3,7 Mo </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cards_song}>
    <Text style={styles.song_name}> Lucy’s song - Ryan Little </Text>
    <Text style={styles.song_weight}> 2,7 Mo </Text>
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
    fontFamily: "poppinsLight",
    position: 'absolute',
    right: 0,
    marginHorizontal: wp("5%")
  },
  cards_song: {
    flex: 1,
    width: wp("95%"),
    marginHorizontal: wp("2.5%"),
    flexDirection: "row",
    marginVertical: wp("3%")
  },
  albumCover: {
    width: 161,
    height: 161,
    marginTop: 60,
    marginRight: 'auto',
    marginBottom: 10,
    marginLeft: 'auto'
  },
  playlist_name:{
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFF"
  },
  playlist_size:{
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 16,
    color: "#B6B5B5"
  },
  playlist_button:{
    flex:1,
    backgroundColor:"#EF1B43",
    marginTop:20,
    marginBottom:20,
    width:208,
    height:48,
    borderRadius:40,
    justifyContent:"center"
  },
  playlist_button_text:{
    color:"#FFF",
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    fontSize: 21,
  }

});
