import {StyleSheet, Dimensions} from "react-native";
const {width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
 container: {
    flex : 1
 }, bgContainer: {
    flex : 1, 
    position: 'absolute',
    width,
    height
 }, title: {
    fontSize: 32,
    color: 'white', 
    textAlign: 'center',
 },
 row: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: height * 0.2
 },
 van:{
    width: 80,
    height: 48
 },
 textContainer: {
    width: width * 0.9,
    left: width * 0.05,
    height: 48,
    borderRadius: 8,
    borderColor: "white",
    borderWidth : 1,
    marginTop: height * 0.15
 }, textInputStyle:{
    left: width * 0.02,
    height: 48,
    color: "white"
 },loginBtnContainer:{
   width: width * 0.6,
   left: width * 0.2,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 1, 
    borderColor: "rgba(214,214,214,0.6)",
    marginTop: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
 }, loginText:{
       color: "rgba(31,31,31,0.7)",
       fontSize: 24,
       fontWeight: "bold"
   }
});

export default styles;