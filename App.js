/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Slider from '@react-native-community/slider';
const App: () => React$Node = () => {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <View style={styles.body}>
      {
        !show &&
        <View style={{ flex: 1, width: '80%', }}>
          <View style={{ flex: 1, backgroundColor: 'white', position: 'absolute', justifyContent: 'center', alignItems: 'center', height: 5, width: '100%', top: 366, flexDirection: 'row'}}>
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
            <View style={{ width: 20, height: 4, backgroundColor: 'gray', marginRight: 10, borderRadius: 1 }} />
          </View>
          <Slider
            style={{flex: 1, height: 40}}
            minimumValue={0}
            maximumValue={1}
            
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbImage={require("./thumb.png")}
            
            onSlidingComplete={(value) => value !== 1 ? setValue(0) : true}
            value={value}
            onValueChange={value => value===1 ? setShow(true) : setValue(value)}
          />
        </View>
      }
        {
          show &&
          <View style={{position: 'absolute', top: 100, justifyContent: 'center', alignContent: 'center', margin: 20}}><Text style={{fontSize: 40, color: 'black', fontWeight: 'bold'}}>Completou!</Text></View>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
