
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
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

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
/*
Above declares the type (DiceProps) of imageUrl, as ImageSourcePropType, so that whenever you declare a dice component, it basically allows you to directly pass on images. This is a good approach to use as it is less error prone. 
*/

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}
/*
Above what is happening is you have created a new component. By "component" I mean things like <Image> 
or <View> or <Text> or whatver you use to assemble your app. Its a new one called <Dice>. What it 
expects as a parameter is imageUrl which you would add as follows:

<Dice imageUrl={diceImage} />

This the displays the image of the dice. However, having the "DiceProps" next to the imageUrl on line 27
basically sets the requirement that the url provided is for that of an image, and nothing else. It can't
just be a random string or something. Its a very good way to avoid errors. The DiceProp thing is written
and established in line 20. 
*/

function App(): JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  //Above, having <ImageSourcePropType> there simple tells it that the default state provided HAS to
  //be an image. NOTHING ELSE. So if set the default paremeter to a random string for example "abc",
  //it will throw an error. Its not entirely necessary to do this, but its just good practice.

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
  }
  /*
  The above method is extremely simple. It just assigns a number between 1 and 6 to the variable
  "randomNumber", and then uses a basic switch statement to set the image to the corresponding
  dice image, using the setDiceImage() method from the useState thingo we did on line 49 like
  usual.

  Its notable that the default case gets us setting the dice image to DiceOne, which is itself
  the default image, just to make sure nothing unwanted happens.
  */

  return (
    <SafeAreaView style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap} style={styles.buttonContainer} >
        <Text style={styles.rollDiceBtnText} >
          Roll the Dice
        </Text>
      </Pressable>
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
    height: 200,
    borderRadius: 25
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 37,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  buttonContainer: {
    paddingVertical: 10
  }
});

export default App;
