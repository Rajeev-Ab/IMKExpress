import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

export default class Header extends React.Component {
    render(){
        return(
        <View style={styles.container}>
           <View style={styles.row}>
                 <Text style={styles.title}>IMK Express</Text>
                 <Image  style={styles.van} source={require("../../../img/van.png")}></Image>
                    
           </View>
             
        </View>
        )
    }
}