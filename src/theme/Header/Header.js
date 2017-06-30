import React from 'react';
import { StyleSheet,View } from 'react-native';
import {Text} from "../index"
import {Constants} from "@common"

const Header = (props) => {
    return (
      <View style={[styles.container,props.headerStyle]}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:Constants.APP_COLOR,
    justifyContent:"center"
  },
  title:{
    fontSize:17,
    fontWeight:"bold",
    color:"white",
    marginLeft:20
  }
});

export default Header;
