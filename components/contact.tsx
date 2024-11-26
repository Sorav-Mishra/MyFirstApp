import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import myImage from '../images/IMG.jpg';

const Contact: React.FC = () => {
  return (
    <>
      <Text style={styles.contact}>Contacts</Text>
      <View style={styles.first}>
        <Image source={myImage} style={styles.image} resizeMode="cover" />
        <Text>Web de</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contact: {
    color: 'gray',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  first: {
    width: '100%',
    height: 80,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

export default Contact;
