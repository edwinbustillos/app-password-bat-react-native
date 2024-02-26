import React, { useState } from "react";
import { ImageBackground, View, Image} from "react-native";
import styles from "../styles";
import image from "../../assets/background.jpg";
import logo from "../../assets/logo.png";
import ButtonBat from "../components/button";
import DisplayText from "../components/display";
import * as Clipboard from 'expo-clipboard';

export default function Home() {

  const [password, setPassword] = useState('Hello World' as string);

  const copyToClipboard = (pass:string) => {
    Clipboard.setString(pass);
  };

  const generatePassword = () => {
    const length = 10;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(result);
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.centeredContent}>
          <DisplayText text={password} />
          <Image source={logo} style={styles.centeredImage} />
          <View style={styles.buttonContainer}>
            <ButtonBat title="Gerar Senha" onPress={generatePassword} />
            <ButtonBat title="Copiar" onPress={()=>copyToClipboard(password)} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}