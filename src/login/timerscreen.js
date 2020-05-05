import React from 'react';
import {StyleSheet,Text,Keyboard,View,TextInput,TouchableWithoutFeedback,Alert,KeyboardAvoidingView,Button,Image, TouchableHighlight,ImageBackground,Platform,Dimensions
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Timer extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Timer
          </Text>
        </View>


        <View style={styles.textContainer}>
          <Text style={styles.timerText}>
            0:00:00
          </Text>    
        </View>

         <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Home')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    Start timer
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Home')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                   Homescreen
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Genre')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                   Genre Selection
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
    justifyContent:'space-around',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height:deviceHeight/8,
  },
  titleText:{
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',  
    fontSize:20,
  },

   timerText:{
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
        borderRadius: 10,
        backgroundColor: '#42AFC2',
        margin:20,
    },

    buttonContainer:{
      height:deviceHeight/3,
      justifyContent:'center',
      alignItems:'center',
    },
   
    buttonText: {
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Timer;
