import React from "react";
import {View, Image, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "./styles";
import Loader from "../component/loader";

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {loading:false}
    }

    _showLoader(){
       if (this.state.loading){
        return(<Loader></Loader>)
       }else{
        return(<View></View>)
       }
    }
    render(){
        return(
            <View>
                <Image style={styles.bgContainer} source={require("../../img/bg2.jpg")} resizeMode={"stretch"}></Image>
                    <View style={styles.row}>
                       <Text style={styles.title}>IMK Express</Text>
                       <Image  style={styles.van} source={require("../../img/van.png")}></Image>
                     </View>

                     <View style={styles.textContainer}>
                        <TextInput style={styles.textInputStyle} placeholderTextColor={"rgba(214, 214, 214, 0.8)"} placeholder="Enter your phone number"></TextInput>
                     </View>
                     <View style={[styles.textContainer, {marginTop:20}]}>
                     <TextInput style={styles.textInputStyle} placeholderTextColor={"rgba(214, 214, 214, 0.8)"} placeholder="Enter your password"></TextInput>
                     
                     </View>

                     <TouchableOpacity style={styles.loginBtnContainer} onPress={()=> this.setState({loading:true})}>
                     <Text style={styles.loginText}>Log in</Text>
                     </TouchableOpacity>
                
                {this._showLoader()}
                
            </View>
        )
    }
}
