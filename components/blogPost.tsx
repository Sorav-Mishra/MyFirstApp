import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import myImage from '../images/react-native.jpg';

const Blog: React.FC = () => {
  const openLink = () => {
    Linking.openURL('linkedin.com/in/abhishek-mishra-b18531339');
  };

  return (
    <>
      <Text style={styles.bolgPost}>Blog Post</Text>
      <View style={styles.bolg}>
        <Text style={styles.text}>Best-React-Native Playlist</Text>
        <Image source={myImage} style={styles.image} resizeMode="cover" />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={openLink} style={styles.btn}>
            <Text style={styles.buttonText}>View more</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openLink} style={styles.btn}>
            <Text style={styles.buttonText}>You Tube</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.contact}>MY FIRST APP</Text>
    </>
  );
};

const styles = StyleSheet.create({
  bolgPost: {
    marginHorizontal: 10,
    marginBlockStart: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
  },
  bolg: {
    marginBlockStart: 20,
    height: 370,
    width: '100%',
    //backgroundColor: 'rgba(135, 206, 235, 0.8)',
    //backgroundColor: '#a8d8ea',
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fee440',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },

  image: {
    marginBlockStart: 10,
    height: '80%',
    width: '100%',
    // marginHorizontal: 4,
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBlockStart: 10,
  },

  btn: {
    height: 40,
    width: 120,
    backgroundColor: 'rgba(135, 206, 235, 0.8)',
    //backgroundColor: '#a8d8ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contact: {
    color: 'gray',
    fontSize: 30,
    //fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 60,
    //marginHorizontal: 10,
  },
});

export default Blog;
