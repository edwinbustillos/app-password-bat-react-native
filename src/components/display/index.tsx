import React from 'react'
import { Text, View, StyleSheet } from 'react-native' 
import { useFonts, Khand_600SemiBold } from '@expo-google-fonts/khand';

const DisplayText = ({text}:any) => {
    let [fontsLoaded] = useFonts({
        Khand_600SemiBold,
      });

    return (
        <View>
            <Text style={fontsLoaded ? styles.textDisplay : null}> {text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textDisplay: {
        fontFamily: 'Khand_600SemiBold',
        width: 200,
        height: 80,
        borderWidth: 8,
        color: 'black',
        backgroundColor: '#ffdd00',
        borderRadius: 10,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor: "rgba(0, 0, 0, 0.9)",
        overflow: 'hidden', 
        paddingTop: 10,
      },
});

export default DisplayText