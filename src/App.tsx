
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/DiceOne.png' //Refer to "index.d.ts" file for IMPORTANT information regarding the importing of images, and declaring their data type as a module.
import DiceTwo from '../assets/DiceTwo.png'
import DiceThree from '../assets/DiceThree.png'
import DiceFour from '../assets/DiceFour.png'
import DiceFive from '../assets/DiceFive.png'
import DiceSix from '../assets/DiceSix.png'

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Text>Text is here</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2'
  },
  diceContainer: {
    margin: 12
  },
  diceImage: {
    width: 200,
    height: 200
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
});

export default App;
