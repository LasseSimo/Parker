import React from 'react';
import { StyleSheet,TouchableOpacity,View,Image,TouchableHighlight } from 'react-native';
import {Text} from "../index"
import {Constants} from "@common"

const Button = (props) => {
    if (props.type === "border") {
      return <BorderButton {...props}/>
    }else if (props.type === "image") {
      return <ImageButton {...props}/>
    }else if (props.type === "text") {
      return <TextButton {...props}/>
    }else if (props.type === "next") {
      return <NextButton {...props}/>
    }else if (props.type === "pre") {
      return <PreButton {...props}/>
    }else{
      return <StandardButton {...props}/>
    }

};

const StandardButton = (props) => (
  <TouchableHighlight onPress={()=>props.inactive||props.onPress()} style={[styles.button,props.style,props.inactive && {backgroundColor:"#C6D8E4"}]} activeOpacity={0.6} underlayColor="#C6D8E4">
      <View><Text {...props} onPress={()=>props.inactive||props.onPress()} style={[styles.text,props.textStyle]}>{props.text}</Text></View>
  </TouchableHighlight>
);

const BorderButton = (props) => (
  <TouchableHighlight onPress={()=>{return props.onPress()}} style={[styles.borderButton,props.style]} activeOpacity={0.6} underlayColor="#C6D8E4">
      <View><Text {...props} style={[styles.text,props.textStyle]}>{props.text}</Text></View>
  </TouchableHighlight>
);

const ImageButton = (props) => (
  <TouchableHighlight onPress={()=>{return props.onPress()}} activeOpacity={1.0} underlayColor="transparent" style={props.buttonStyle}>
      <Image {...props} style={props.imageStyle}/>
  </TouchableHighlight>
);

const TextButton = (props) => (
  <TouchableHighlight onPress={()=>{return props.onPress()}} activeOpacity={0.6} underlayColor="#C6D8E4">
      <View><Text {...props} style={[styles.text,props.textStyle]}>{props.text}</Text></View>
  </TouchableHighlight>
);

const PreButton = (props) => (
  <TouchableHighlight onPress={()=>{return props.onPress()}} activeOpacity={0.6} underlayColor="#C6D8E4">
      <View style={[styles.nextView,props.buttonStyle]}>
        <Image style={styles.preIcon} source={require('@images/ic_arrow_back_48pt.png')}/>
        <View style={{flex:1,alignItems:"center"}}><Text style={styles.nextText}>{props.nextText}</Text></View>
      </View>
  </TouchableHighlight>
);

const NextButton = (props) => (
  <TouchableHighlight onPress={()=>{return props.onPress()}} activeOpacity={0.6} underlayColor="#C6D8E4">
      <View style={[styles.nextView,props.buttonStyle]}>
        <View style={{flex:1,alignItems:"center"}}><Text style={styles.nextText}>{props.nextText}</Text></View>
        <Image style={styles.nextIcon} source={require('@images/ic_arrow_forward_48pt.png')}/>
      </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor:"#0B4A7D",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"white",
    fontSize:17
  },
  borderButton:{
    height: 25,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderRadius:5,
    borderColor:"white"
  },
  nextView:{
    backgroundColor:Constants.APP_COLOR,
    width:150,
    height:50,
    flexDirection:"row",
    alignItems:"center"
  },
  nextText:{
    fontWeight:"900",
    color:"white",
    fontSize:17
  },
  nextIcon:{
    width:25,
    height:25,
    resizeMode:"contain",
    marginRight:10,
    tintColor:"#ffb01c"
  },
  preIcon:{
    width:25,
    height:25,
    resizeMode:"contain",
    marginRight:10,
    tintColor:"#ffb01c"
  }
});

export default Button;
