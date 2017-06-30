import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
}from 'react-native'
import {Text} from "@theme"
import styles from "./index_style"
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';

class Introduction extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.content} source={require("@images/ic_background.png")}>
          <Image style={styles.logo} source={require("@images/ic_parker_logo.png")}/>
          <Text style={styles.title}>FLUID POWER SALES MEETING</Text>
        </Image>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={()=>Actions.register()} style={styles.signUpView}>
            <Text style={styles.signUpText}>SIGN UP</Text>
            <Image style={styles.signUpIcon} source={require('@images/ic_arrow_forward_48pt.png')}/>
          </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
