import {StyleSheet, Dimensions} from "react-native";
const {width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        width,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
      },title: {
        fontSize: 26,
        color: 'white', 
        textAlign: 'center',
     },
     row: {
        flexDirection:'row'
      },
     van:{
        width: 70,
        height: 38
     },
});
export default styles;