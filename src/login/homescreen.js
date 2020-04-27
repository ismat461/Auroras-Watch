import React from 'react';
import {StyleSheet,Text,Keyboard,View,TextInput,TouchableWithoutFeedback,Alert,KeyboardAvoidingView,Button,Image, TouchableHighlight,ImageBackground,Platform,Dimensions
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Homescreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>
            Welcome to Aurora's Watch
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Image source ={{uri: 'https://codehs.com/uploads/1a3f40510a74f221c76bdcbd442e9762'}}
          style={{ height: deviceHeight/8, width:deviceWidth/2, justifyContent: 'center',  }}
          />
        </View>



        <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Sign')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    GET STARTED
                  </Text>
                </View>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height:deviceHeight/4,
  },
  greetingText:{
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',  
    fontSize:20,
  },

  text: {
    fontSize: 8,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
      
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
        borderRadius: 10,
        backgroundColor: '#42AFC2',
   
   
    },
   
    buttonText: {
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Homescreen;
