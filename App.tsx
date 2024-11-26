// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import Blog from './components/blogPost';
import Contact from './components/contact';
//import myImage from './images/IMG.jpg';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaview}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.scrollContainer1}>
        <View>
          <Text style={styles.textStyle}>Hello from solo</Text>
        </View>
        <Text style={styles.heading1}>Flat Cards</Text>
        <View style={styles.card}>
          <View style={styles.first}>
            <Text style={styles.text}>Red</Text>
          </View>
          <View style={styles.second}>
            <Text style={styles.text}>green</Text>
          </View>
          <View style={styles.fourth}>
            <Text style={styles.text}>blue</Text>
          </View>
          <View style={styles.third}>
            <Text style={styles.text}>pink</Text>
          </View>
        </View>

        {/* Elevated Cards Section */}
        <Text style={styles.heading1}>Elevated Cards</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.scrollContainer}>
          <View style={styles.elevatedCardContainer}>
            <View style={styles.elevatedCard}>
              <Text style={styles.text1}>Card 1</Text>
            </View>
            <View style={styles.elevatedCard}>
              <Text style={styles.text1}>Card 2</Text>
            </View>
            <View style={styles.elevatedCard}>
              <Text style={styles.text1}>Card 3</Text>
            </View>
            <View style={styles.elevatedCard}>
              <Text style={styles.text1}>Card 4</Text>
            </View>
            <View style={styles.elevatedCard}>
              <Text style={styles.text1}>Card 5</Text>
            </View>
            <View style={styles.elevatedCard}>
              <Text style={styles.text1}>Card 6</Text>
            </View>
            <View style={styles.elevatedCard}>
              <Text style={styles.text1}>Card 7</Text>
            </View>
          </View>
        </ScrollView>

        {/* add some Tranding places */}
        <Text style={styles.tranding}>Tranding places</Text>
        <View style={styles.places}>
          <Image
            source={{
              uri: 'https://media2.thrillophilia.com/images/photos/000/013/585/original/1594791200_shutterstock_1137990866.jpg?width=975&height=600',
            }}
            style={styles.trandingplace}
          />
          <Text style={styles.rishikesh}>1.Rishikesh</Text>
          <Text style={styles.textStyle1}>
            Rishikesh is a city in India’s northern state of Uttarakhand, in the
            Himalayan foothills beside the Ganges River. The river is considered
            holy, and the city is renowned as a center for studying yoga and
            meditation. Temples and ashrams (centers for spiritual studies) line
            the eastern bank around Swarg Ashram, a traffic-free, alcohol-free
            and vegetarian enclave upstream from Rishikesh town.
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.makemytrip.com/tripideas/places-to-visit-in-rishikesh',
              )
            }
            style={styles.textStyle2}>
            Visit Rishikesh
          </Text>
        </View>
        <Blog />
        <Contact />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaview: {
    flex: 1,
  },

  scrollContainer1: {
    // flex: 1,
    //backgroundColor: '#f9f9f9',
    // padding: 1,
    // margin: 5,
    // borderRadius: 8,
    // borderWidth: 1,
    //borderColor: '#ccc',
  },

  textStyle: {
    color: 'lightgray',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
  },

  textStyle1: {
    color: 'white',
    fontSize: 18,
    //fontWeight: 'bold',
  },
  textStyle2: {
    marginInlineStart: 5,
    color: 'blue',
    fontSize: 16,
    //fontWeight: 'bold',
  },

  heading1: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'lightgray',
  },

  tranding: {
    marginBlockStart: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
  },

  rishikesh: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    // marginInlineEnd: '70%',
  },

  card: {
    flexDirection: 'row',
    margin: 5,
    // backgroundColor: 'red',
  },

  first: {
    backgroundColor: 'red',
    height: 90,
    width: 90,
    margin: 5,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  second: {
    backgroundColor: 'green',
    height: 90,
    width: 90,
    margin: 5,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  third: {
    backgroundColor: 'pink',
    height: 90,
    width: 90,
    margin: 5,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fourth: {
    backgroundColor: 'blue',
    height: 90,
    width: 90,
    margin: 5,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },

  elevatedCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //margin: 5,
  },

  elevatedCard: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  scrollContainer: {
    marginVertical: 5,
    //paddingHorizontal: 0,
  },

  //Trading places css

  places: {
    height: 530,
    width: '100%',
    backgroundColor: 'dark',
    //display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'center',
  },

  trandingplace: {
    height: 300,
    width: '100%',
  },

  blog: {
    height: 300,
    width: '100%',
    backgroundColor: 'orange',
  },
});

export default App;
