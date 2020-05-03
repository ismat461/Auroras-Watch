import React from 'react';
import {StyleSheet,Text,Keyboard,View,TextInput,TouchableWithoutFeedback,Alert,KeyboardAvoidingView,Button,Image, TouchableHighlight,ImageBackground,Platform,Dimensions,UIManager,TouchableOpacity, Picker, } from 'react-native';

import Slider from "react-native-slider";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Pop extends React.Component {
    constructor(props) {
     super();
    this.state={
       PickerSelectedVal : '',
       value: 170.5,
     }
    }
    getSelectedPickerValue=()=>{
      Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
    }
    state={
      
    };

   
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image source ={{     uri:'https://lh3.googleusercontent.com/gO7pxgL_orSrMmSxmXdKvOnjOre6ft13UhfzCG75jOgAcLlJXesEKdzO2LvpzSWBcxMfOw=s116'}}
          style={{ height: deviceHeight/8, width:deviceWidth/6, justifyContent: 'center',  }}
          />
          <Text style={styles.text}>
            Pop Music
          </Text>
          <Image source ={{     uri:'https://lh3.googleusercontent.com/gO7pxgL_orSrMmSxmXdKvOnjOre6ft13UhfzCG75jOgAcLlJXesEKdzO2LvpzSWBcxMfOw=s116'}}
          style={{ height: deviceHeight/8, width:deviceWidth/6, justifyContent: 'center',  }}
          />
        </View>
<View style={styles.centerContainer}>       
        <View style={styles.textContainer}>
          <Image source ={{uri: 'https://images.unsplash.com/photo-1585207691339-2de6e9bc67b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'}}
          style={{ height: deviceHeight/4, width:deviceWidth/1.5, justifyContent: 'center',  }}
          />
        </View>
        
                  <View style={styles.frequencyContainer}>
                  <Slider
                    value={this.state.value}
                    minimumValue={100.2}
                    maximumValue={200}
                    step={2}
                    onValueChange={value => this.setState({ value })}
                  />
                  <Text style= {styles.frequencyText}>
                    Frequency: {this.state.value}
                  </Text>
                  </View>   
        </View>
        <View style={styles.columnContainer2}>
          <Text style={styles.musicText}>
            Music Selection
          </Text>
          <View style={styles.columnContainer3}>
            <Picker 
              selectedValue={this.state.PickerSelectedVal}
              onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} 
              >
              <Picker.Item label="Billie Eilish" value="Billie Eilish" />
              <Picker.Item label="Beyonce" value="Beyonce" />
              <Picker.Item label="Justin Bieber" value="Justin Bieber" />
              <Picker.Item label="Ariana Grande" value="Ariana Grande" />
              <Picker.Item label="Bruno Mars" value="Bruno Mars" />
              <Picker.Item label="Katy Perry" value="Katy Perry" />
            </Picker>
            <Button title="Choose Music" onPress={ this.getSelectedPickerValue } />
          </View>
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

  musicText: {
    fontSize: 20,
    margin: 5,
    fontWeight: "bold",
    textAlign:'center',
  },
  centerContainer:{
    alignItems:'center',
    justifyContent:'space-between',
    height:deviceHeight/3,
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height:deviceHeight/7,
    flexDirection:'row',
    margin:10,
  },

  text: {
    fontSize: 28,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frequencyText:{
    textAlign:'center',
  },

   columnContainer2:{
    flexDirection:'column',
    marginTop:30,
    justifyItems:'space-around',
    width:deviceWidth/1.5,
    height:deviceHeight/7,
  }, 

   columnContainer3:{
    flexDirection:'column',
    marginTop:30,
    justifyItems:'space-around',
    width:deviceWidth/1.5,
    height:deviceHeight/7,
  }, 

  frequencyContainer:{
    flexDirection:'column',
    margin:30,
    justifyContent:'space-around',
    width:deviceWidth/1.5,
  },

   
});


export default Pop;
