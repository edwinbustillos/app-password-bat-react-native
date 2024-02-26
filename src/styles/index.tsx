import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      flex: 1,
      width: "100%",
      justifyContent: 'center',
    },
    centeredContent: {
      alignItems: 'center',
    },
    centeredImage: {
      width: 400,
      height: 400,
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
    },
    buttonYellow: {
      
      fontSize: 20,
      color: 'white',
    },
    linearGradient: {
      width: 200,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderWidth: 6,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      margin: 10,
    },
  });

export default styles;