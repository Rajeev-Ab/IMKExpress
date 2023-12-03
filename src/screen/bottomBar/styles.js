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
     }, bottomBar: {
        height: 64,
        position: 'absolute',
        marginTop: height - 136,
        backgroundColor : "white",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        width
     },
     centerView:{
        width: 80, 
        height:80,
        borderRadius:40,
        backgroundColor:'white',
        position:'absolute',
        marginLeft: width*0.5 - 40,
        marginTop: -15
     }, row:{
        flexDirection:'row'
     },iconContainer:{
        width: width*0.20,
        height:64,
     },alignCenter: {
        width: width*0.20,
        justifyContent: 'center',
        alignItems: 'center'
     },textStyle:{
        fontSize: 12
     },iconContainer1:{
        width: width*0.20, 
        height: 64, 
        justifyContent: 'center',
        alignItems: 'center'
    },selectedCircle: {
        width: 60,
        height: 60,
        borderRadius:30,
        backgroundColor: "rgba(11, 212, 184, 1.0)",
        position:'absolute'
    }
});
export default styles;