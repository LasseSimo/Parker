import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
}from 'react-native'
import {Text,Progress,Header,Button} from "@theme"
import styles from "./index_style"
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';

class Registration extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <View style={styles.container} >
        <Progress percent={0.2}/>
        <Header title="REGISTRATION"/>
        <Text style={styles.message}>
          Please fill out the following forms in order to sign you up to our fluid power sales meeting event
        </Text>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Client number" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Company Name" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email Address Again" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Mobile Number (10digits)" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Button type="pre" nextText="PREVIOUS" buttonStyle={{marginLeft:20}} onPress={()=>Actions.pop()}/>
          <Button type="next" nextText="NEXT" buttonStyle={{marginRight:20}} onPress={()=>Actions.address()}/>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
