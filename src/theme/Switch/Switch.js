import React from 'react';
import { StyleSheet, View, Image ,TouchableOpacity } from 'react-native';
import {Constants} from "@common"
import {Text} from "../index"

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn:props.isOn
    }
  }

  render(){
    var source = this.state.isOn==true?require("@images/ic_switch_on.png"):require("@images/ic_switch_off.png")
    return (
      <TouchableOpacity onPress={this.onChange.bind(this)}>
        <Image source={source} style={styles.icon}/>
      </TouchableOpacity>
    )
  }

  onChange(){
    this.props.onChange(!this.state.isOn)
    this.setState({isOn:!this.state.isOn})
  }
}

Switch.defaultProps = {
  isOn:true
}

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:Constants.APP_COLOR,
    flexDirection:"row"
  },
  icon:{
    width:50,
    height:20,
    resizeMode:"contain"
  },

});

export default Switch;
