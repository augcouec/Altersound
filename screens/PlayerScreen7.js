import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const audioBookPlaylist = [
  {
    title: "Firmament Calm",
    author: "PeriTune",
    source: require("../assets/musique/PeriTuneFirmamentCalm.mp3"),
    imageSource:
      "https://i1.sndcdn.com/artworks-000235890640-ni3w33-t500x500.jpg"
  },
  {
    title: "Art of Silence",
    author: "Uniq",
    source: require("../assets/musique/AmbientMusic.mp3"),
    imageSource: "https://i.ytimg.com/vi/3V-pYCGx0C4/maxresdefault.jpg"
  },
  {
    title: "Birds and the Bees",
    author: "Dj Quads",
    source: require("../assets/musique/DjQuadsBirdsAndTheBees.mp3"),
    imageSource: "https://i.ytimg.com/vi/1fk3i2Kg3UU/hqdefault.jpg"
  },
  {
    title: "Clouds",
    author: "Ehrling",
    source: require("../assets/musique/EhrlingClouds.mp3"),
    imageSource:
      "https://i1.sndcdn.com/artworks-000187879360-qc2wby-t500x500.jpg"
  },
  {
    title: "Chill Day",
    author: "Lakey Inspired",
    source: require("../assets/musique/LakeyInspiredChillDay.mp3"),
    imageSource: "https://m.media-amazon.com/images/I/91pR-YHwP5L._SS500_.jpg"
  },
  {
    title: "Infinity",
    author: "Lemmino",
    source: require("../assets/musique/LemminoInfinity.mp3"),
    imageSource:
      "https://images.rapgenius.com/f8091b8021f15021d2fef150ceb643e3.1000x1000x1.jpg"
  },

  {
    title: "Lucy's Song",
    author: "Ryan Little",
    source: require("../assets/musique/RyanLittleLucysSong.mp3"),
    imageSource:
      "https://hypeddit-gates-prod.s3.amazonaws.com/jvewjc_coverartmanual"
  },
  {
    title: "Embrace",
    author: "Sappheiros",
    source: require("../assets/musique/SappheirosEmbrace.mp3"),
    imageSource:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d9bfb2d5ee2db0b0400a80930d5761a0.jpg"
  },
  {
    title: "Good For You",
    author: "THBD",
    source: require("../assets/musique/THBDGoodForYou.mp3"),
    imageSource:
      "https://i1.sndcdn.com/artworks-000203614410-cno4yq-t500x500.jpg"
  },
  {
    title: "Lost In The Night (feet. Pipa Moran)",
    author: "THBD",
    source: require("../assets/musique/THBDLostInTheNightfeatPipa Moran.mp3"),
    imageSource:
      "https://i.pinimg.com/564x/c9/64/e8/c964e8bcaf63705e3977db397ca39f35.jpg"
  },
  {
    title: "If Only You Knew",
    author: "Vorsa",
    source: require("../assets/musique/VorsaIfOnlyYouKnew.mp3"),
    imageSource:
      "https://i.scdn.co/image/ab67616d00001e02982ec603ac1220b026e0d646"
  }
];

export default class App extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: true
  };

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      });

      this.loadAudio();
    } catch (e) {
      console.log(e);
    }
  }

  async loadAudio() {
    const { currentIndex, isPlaying, volume } = this.state;
    try {
      const playbackInstance = new Audio.Sound();
      const source = audioBookPlaylist[currentIndex].source;
      const status = {
        shouldPlay: isPlaying,
        volume: volume
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({
        playbackInstance
      });
    } catch (e) {
      console.log(e);
    }
  }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    });
  };

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying
    });
  };

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      this.setState({
        currentIndex:
          currentIndex === 0 ? audioBookPlaylist.length - 1 : currentIndex - 1
      });
      this.loadAudio();
    }
  };

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      this.setState({
        currentIndex:
          currentIndex + 1 > audioBookPlaylist.length - 1 ? 0 : currentIndex + 1
      });
      this.loadAudio();
    }
  };

  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state;
    return playbackInstance ? (
      <View style={styles.trackInfo}>
        <Text style={[styles.trackInfoText, styles.largeText]}>
          {audioBookPlaylist[currentIndex].title}
        </Text>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          {audioBookPlaylist[currentIndex].author}
        </Text>
      </View>
    ) : null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.albumCover}
          source={{
            uri: "https://m.media-amazon.com/images/I/91pR-YHwP5L._SS500_.jpg"
          }}
        />
        {this.renderFileInfo()}
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handlePreviousTrack}
          >
            <Text
              name="impact"
              style={{
                fontFamily: "icomoon",
                color: "#FFF",
                fontSize: 30,
                textAlign: "center"
              }}
            >
              j
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handlePlayPause}
          >
            {this.state.isPlaying ? (
              <Ionicons name="ios-pause" size={48} color="#FFF" />
            ) : (
              <Text
                name="impact"
                style={{
                  fontFamily: "icomoon",
                  color: "#FFF",
                  fontSize: 60,
                  textAlign: "center"
                }}
              >
                h
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handleNextTrack}
          >
            <Text
              name="impact"
              style={{
                fontFamily: "icomoon",
                color: "#FFF",
                fontSize: 30,
                textAlign: "center"
              }}
            >
              i
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.info_text}>Cette musqiue pèse 3,5Mo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141623",
    alignItems: "center",
    justifyContent: "center"
  },
  albumCover: {
    width: 250,
    height: 250
  },
  trackInfo: {
    padding: 40,
    backgroundColor: "#141623"
  },

  trackInfoText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "#FFF"
  },
  largeText: {
    fontSize: 22
  },
  smallText: {
    fontSize: 16
  },
  control: {
    margin: 20
  },
  controls: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  info_text: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: wp("2%"),
    textAlign: "center",
    marginTop: wp("10%"),
    marginHorizontal: wp("10%")
  }
});
