     
import React, { Component } from "react";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight, Dimensions} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Email extends React.Component {


  render() {
     
    return (
    

      
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

<View style={styles.textContainer}>

<Image source ={{uri: 'https://codehs.com/uploads/1a3f40510a74f221c76bdcbd442e9762'}}
          style={{ height: deviceHeight/8, width:deviceWidth/2, justifyContent: 'center',  }}
          />

</View>

          <Text style={styles.logoText}>WHATS YOUR EMAIL ADDRESS</Text>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
          
           <View style={styles.textContainer}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Timer')}
              >
                  <View style={styles.touchableButton1}>
                              <Text style={styles.buttonText}>
                                  CONTINUE
                              </Text>
                  </View>
              </TouchableHighlight>
            </View>
            
          </View>
        </View>
    
     
    );
  }

}





const styles = StyleSheet.create({

container: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
  backgroundColor:'white',
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor: '#42AFC2',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },
    logoText: {
  fontSize: 15,
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
},

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});


export default Email;
