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
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';


const App: () => React$Node = () => {

  simpleAlertHandler = () => {
    //function to make three option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am three option alert. Do you want to cancel me ?',
      [
        { text: 'May be', onPress: () => console.log('May be Pressed') },
        { text: 'Yes', onPress: () => console.log('Yes Pressed') },
        { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel' },
      ],
      { cancelable: true }
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style = { styles.navigationView }>
              <Text style = { styles.titleText } > Title name here </Text>
          </View>
          <View style={styles.MainContainer}>

   <TouchableOpacity  onPress={this.simpleAlertHandler} style={styles.FacebookStyle} activeOpacity={0.5}>

   <Image
            source={require('./Images/telegram.png')}
            style={styles.ImageIconStyle}
            />
      <View style={styles.SeparatorLine} />

      <Text style={styles.TextStyle}>    تلگرام    </Text>

    </TouchableOpacity>


    <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>

    <Image
             source={require('./Images/cloud.png')}
             style={styles.ImageIconStyle}
             />

      <View style={styles.SeparatorLine} />

      <Text style={styles.TextStyle}>   تاریخچه </Text>

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
  height: 50,
  borderRadius: 5 ,
  margin: 5,

},

FacebookStyle: {
 flexDirection: 'row',
 alignItems: 'center',
 backgroundColor: '#0088cc',
 borderWidth: .5,
 borderColor: '#fff',
 height: 50,
 borderRadius: 5 ,
 margin: 5,

},

ImageIconStyle: {
  padding: 18,
  margin: 5,
  height: 35,
  width: 35,
  resizeMode : 'stretch',

},

TextStyle :{
 fontSize:16,
 color: "#fff",
 marginBottom : 4,
 marginRight :20,
padding :40,
},

SeparatorLine :{

backgroundColor : '#fff',
width: 1,
height: 40

}
});

export default App;
