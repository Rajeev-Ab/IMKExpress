import React from 'react';
import { StyleSheet,Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  
  render() {
    const { visible } = this.state;
    return (
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(21,21,21,0.75)"
        source={require("../../../img/loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text style={{color:"white"}}>Please Wait...</Text>
      </AnimatedLoader>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});