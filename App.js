/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
     
      <View style = { styles.navigationView }>
              <Text style = { styles.titleText } > Title name here </Text>
          </View>
          <View style={styles.MainContainer}>

   <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>

   <Image
            source={require('./Images/Facebook_Login_Button.png')}
            style={styles.ImageIconStyle}
            />
      <View style={styles.SeparatorLine} />

      <Text style={styles.TextStyle}> Login Using Facebook </Text>

    </TouchableOpacity>


    <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>

    <Image
             source={require('./Images/Google_Plus.png')}
             style={styles.ImageIconStyle}
             />

      <View style={styles.SeparatorLine} />

      <Text style={styles.TextStyle}> Login Using Google Plus </Text>

    </TouchableOpacity>

  </View>

    </>
  );
};

const styles = StyleSheet.create({

  navigationView: {
        height: 44,
        width: '100%',
        backgroundColor:'darkgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    MainContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10
},

GooglePlusStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#dc4e41',
  borderWidth: .5,
  borderColor: '#fff',
  height: 40,
  borderRadius: 5 ,
  margin: 5,

},

FacebookStyle: {
 flexDirection: 'row',
 alignItems: 'center',
 backgroundColor: '#485a96',
 borderWidth: .5,
 borderColor: '#fff',
 height: 40,
 borderRadius: 5 ,
 margin: 5,

},

ImageIconStyle: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'stretch',

},

TextStyle :{

 color: "#fff",
 marginBottom : 4,
 marginRight :20,

},

SeparatorLine :{

backgroundColor : '#fff',
width: 1,
height: 40

}
});

export default App;
