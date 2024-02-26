import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles';
import { useFonts, Khand_600SemiBold } from '@expo-google-fonts/khand';


const ButtonBat: any = ({ onPress, title }: any) => {
  let [fontsLoaded] = useFonts({
    Khand_600SemiBold,
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#393938', '#060606', '#040401']}
        style={styles.linearGradient}>
        <Text style={[styles.buttonYellow, fontsLoaded ? stylesText.buttonFont:null]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const stylesText = StyleSheet.create({
  buttonFont: {
    fontFamily: 'Khand_600SemiBold',
  },
});
export default ButtonBat
