import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import myImage from '../images/IMG.jpg';

const Blog: React.FC = () => {
  const openLink = () => {
    Linking.openURL('linkedin.com/in/abhishek-mishra-b18531339');
  };

  return (
    <>
      <Text style={styles.bolgPost}>Blog Post</Text>
      <View style={styles.bolg}>
        <Image source={myImage} style={styles.image} resizeMode="cover" />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={openLink} style={styles.btn}>
            <Text style={styles.buttonText}>View more</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openLink} style={styles.btn}>
            <Text style={styles.buttonText}>Linkdin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bolgPost: {
    marginBlockStart: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
  },
  bolg: {
    height: 360,
    width: '100%',
    backgroundColor: 'dark',
  },

  image: {
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
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Blog;
