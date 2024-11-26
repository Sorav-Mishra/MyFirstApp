import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import myImage from '../images/IMG.jpg';
import C from '../images/chai.jpg';
import apna from '../images/apnacollage.jpeg';
import java from '../images/javascript.jpg';
const Contact: React.FC = () => {
  return (
    <>
      <Text style={styles.contact}>Contacts</Text>
      <View style={styles.margin}>
        <View style={styles.first}>
          <Image source={myImage} style={styles.image} resizeMode="cover" />
          <Text style={styles.text}>Abhishek Mishra</Text>
          <Text style={styles.text1}>Check Linkdin Profile</Text>
        </View>
        <View style={styles.first}>
          <Image source={C} style={styles.image} resizeMode="cover" />
          <Text style={styles.text}>C++</Text>
          <Text style={styles.text2}>Check Chai and Code Youtube Channel</Text>
        </View>
        <View style={styles.first}>
          <Image source={apna} style={styles.image} resizeMode="cover" />
          <Text style={styles.text}>JAVA</Text>
          <Text style={styles.text3}>Check Apna Collage Youtube Channel</Text>
        </View>
        <View style={styles.first}>
          <Image source={java} style={styles.image} resizeMode="cover" />
          <Text style={styles.text}>JavaScript</Text>
          <Text style={styles.text4}>Check Chai and Code Youtube Channel</Text>
        </View>
        <Text style={styles.contact}>MY FIRST APP</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contact: {
    color: 'gray',
    fontSize: 30,
    //fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  margin: {
    // margin: 10,
  },
  first: {
    margin: 5,
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    //display: 'flex',
    alignItems: 'center',
    //justifyContent: 'center',
    // backgroundColor: 'black',
  },

  text: {
    marginBlockEnd: 25,
    marginHorizontal: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    marginBlockStart: 25,
    //marginBlockEnd: 0,
    marginHorizontal: -170,
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },

  text2: {
    marginBlockStart: 25,
    //marginBlockEnd: 0,
    marginHorizontal: -50,
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },

  text3: {
    marginBlockStart: 25,
    //marginBlockEnd: 0,
    marginHorizontal: -65,
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text4: {
    marginBlockStart: 25,
    //marginBlockEnd: 0,
    marginHorizontal: -110,
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

export default Contact;
