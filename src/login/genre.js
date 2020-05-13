import React from 'react';
import {StyleSheet,Text,Keyboard,View,TextInput,TouchableWithoutFeedback,Alert,KeyboardAvoidingView,Button,Image, TouchableHighlight,ImageBackground,Platform,Dimensions
} from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Genre extends React.Component {
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Pick a Genre
          </Text>
        </View>
       
        <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Rock')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    Rock
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Classical')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    Classical
                  </Text>
                </View>
            </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('BPM')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    BPM
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Country')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    Country
                  </Text>
                </View>
            </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Pop')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    Pop
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Lullaby')}
            >
                <View style={styles.touchableButton1}>
                  <Text style={styles.buttonText}>
                    Lullaby
                  </Text>
                </View>
            </TouchableHighlight>
        </View>

        <View style={styles.columnContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Other')}
            >
                <View style={styles.touchableButton2}>
                  <Text style={styles.buttonText}>
                    Other
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Timer')}
            >
                <View style={styles.touchableButton3}>
                  <Text style={styles.buttonText}>
                    Back to Timer
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Homescreen')}
            >
                <View style={styles.touchableButton3}>
                  <Text style={styles.buttonText}>
                    Back to Homescreen
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
    alignItems:'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height:deviceHeight/7,
  },
  greetingText:{
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',  
    fontSize:20,
  },

  text: {
    fontSize: 30,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchableButton1: {
    height: deviceHeight/8,
    width: deviceWidth/3,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderRadius: 10,
    backgroundColor: '#42AFC2',
  },

  touchableButton2: {
    height: deviceHeight/16,
    width: deviceWidth/1.35,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderRadius: 10,
    backgroundColor: '#42AFC2',
  },

  touchableButton3: {
    height: deviceHeight/8,
    width: deviceWidth/1.35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    borderRadius: 10,
    backgroundColor: '#42AFC2',
  },

  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center', 
  },

  columnContainer:{
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center', 
  },

   
  buttonText: {
    fontSize: 14,
    fontWeight:'bold',
  },
});


export default Genre;
