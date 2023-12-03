import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import Header from "../component/header";

export default class BottomBar extends React.Component {
    constructor(props){
        super(props)
         this.makeSelect = this.makeSelect.bind(this)

        this.state = {selectedState: "delivery"}
    }

    makeSelect(option){
         this.setState({selectedState:option})
    }

    _isSelected(forState){
        return forState === this.state.selectedState
    }

    _renderSelection(shouldRender){
        const {selectedState} = this.state
        if (shouldRender){
            return(
                <View style={[styles.selectedCircle , {top: selectedState === "scan" ? -5: 2}]}></View>
            )
        }else{
            return(<View></View>)
        }
    }
    render(){
        return(
<View style={styles.container}>
<Image style={styles.bgContainer} source={require("../../img/bg4.jpg")} resizeMode={"stretch"}></Image>
<Header></Header>
<View style={styles.bottomBar}>
<View style={styles.centerView}>
</View>
     <View style={styles.row}>
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.iconContainer1} onPress={()=> this.makeSelect("delivery")}>
              {this._renderSelection(this._isSelected('delivery'))}
                      <Image source={require("../../img/delivery.png")} style={{width:30, height: 25}}></Image>
                      <Text style={styles.textStyle}>Delivery</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.iconContainer1} onPress={()=> this.makeSelect("pickup")}>
              {this._renderSelection(this._isSelected('pickup'))}
                      <Image source={require("../../img/pickup.png")} style={{width:30, height: 30}}></Image>
                      <Text style={styles.textStyle}>Pickup</Text>
               </TouchableOpacity>
             </View>
             
             <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.iconContainer1} onPress={()=> this.makeSelect("scan")}>
              {this._renderSelection(this._isSelected('scan'))}
            
               
                      <Image source={require("../../img/scan.png")} style={{width:30, height: 25}}></Image>
                      <Text style={styles.textStyle}>Scan</Text>
                </TouchableOpacity>
             </View>
             
             <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.iconContainer1} onPress={()=> this.makeSelect("return")}>
              {this._renderSelection(this._isSelected('return'))}
                      <Image source={require("../../img/return.png")} style={{width:30, height: 25}}></Image>
                      <Text style={styles.textStyle}>Return</Text>
               </TouchableOpacity>
             </View>
             
             <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.iconContainer1} onPress={()=> this.makeSelect("transfer")}>
              {this._renderSelection(this._isSelected('transfer'))}
                      <Image source={require("../../img/transfer.png")} style={{width:30, height: 25}}></Image>
                      <Text style={styles.textStyle}>Transfer</Text>
               </TouchableOpacity>
             </View>
     </View>

</View>
</View>
        )
    }
}