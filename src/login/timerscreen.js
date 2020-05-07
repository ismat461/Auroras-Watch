import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function Timer() {

  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  toggle = () => {
    setIsActive(!isActive);
  }

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);


  return (
    <View style={styles.container}>
      <View style={styles.center}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>
              Timer
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={this.toggle} style={styles.touchableButton1}>
                <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.reset} style={[styles.touchableButton1, styles.buttonReset]}>
                <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
            </TouchableOpacity>

            
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
    
    
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
    fontSize:40,
    textAlign:'center',
  },

   timerText:{
    justifyContent: 'center',
    alignItems: 'center',  
    fontSize:30,

  },
  touchableButton1: {
    height: deviceHeight/15,
    width: deviceWidth/1.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#42AFC2',
    marginTop:10
    },

  touchableButton2: {
  height: deviceHeight/15,
    width: deviceWidth/1.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#42AFC2',
    marginTop:10
   },

   center:{
     alignItems:'center',
     justifyContent:'center',
   },

    buttonContainer:{
      height:deviceHeight/3,
      justifyContent:'center',
      alignItems:'center',
    },

    buttonContainer2:{
      height:deviceHeight/5,
      justifyContent:'center',
      alignItems:'center',
    },
   
    buttonText: {
        fontSize: 14,
        fontWeight:'bold',
    }
});
