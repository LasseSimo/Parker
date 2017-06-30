import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
}from 'react-native'
import {Text,Progress,Header,Button,TabView} from "@theme"
import styles from "./index_style"
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import {Constants} from "@common"
class RoomStay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentHeight:0
    }
  }

  render(){
    return (
      <View style={styles.container} onLayout={(event) => {this.setState({contentHeight:event.nativeEvent.layout.height})}}>
        <ScrollView contentContainerStyle={{minHeight:this.state.contentHeight}}>
          <Progress percent={0.2}/>
          <Header title="ROOM STAY" headerStyle={{height:30,justifyContent:"flex-end",paddingBottom:1}}/>
          <TabView items={["Single","Double","Triple"]} onDidSelectIndex={this.didSelectIndex.bind(this)}/>
          <View style={styles.content}>
            <Text style={styles.label}>Name of the reservation holder</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Mr/Mrs" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
            </View>

            <View style={{flexDirection:"row"}}>
              <View style={{flex:2}}>
                <Text style={styles.label}>Check-in Date</Text>
                <View style={[styles.inputContainer,{flexDirection:"row",alignItems:"center"}]}>
                  <TextInput style={[styles.input,{flex:1}]} placeholder="DD-MM-YYYY" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
                  <Image source={require("@images/ic_calendar.png")} style={{width:12,height:12,resizeMode:"contain",marginRight:10}}/>
                </View>
              </View>
              <View style={{flex:2}}>
                <Text style={styles.label}>Check-out Date</Text>
                <View style={[styles.inputContainer,{flexDirection:"row",alignItems:"center"}]}>
                  <TextInput style={[styles.input,{flex:1}]} placeholder="DD-MM-YYYY" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
                  <Image source={require("@images/ic_calendar.png")} style={{width:12,height:12,resizeMode:"contain",marginRight:10}}/>
                </View>
              </View>
            </View>
            <Text style={styles.label}>Extra people in the room</Text>
            <View style={[styles.inputContainer,{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10}]}>
              <Image source={require("@images/ic_group.png")} style={{width:40,height:30,resizeMode:"contain",marginRight:10}}/>
              <Text style={{color:Constants.APP_COLOR,fontSize:17,marginRight:15}}>ADD</Text>
              <Image source={require("@images/ic_add.png")} style={{width:20,height:20,resizeMode:"contain",marginRight:10}}/>
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Cost per person per the whole event</Text>
              <Text style={styles.rowValue}>$ 10,990.00 MXP</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Extra nights per person</Text>
              <Text style={styles.rowValue}>$ 2,000.00 MXP</Text>
            </View>
            <View style={styles.lastRow}>
              <Text style={styles.rowLabel}>VAT</Text>
              <Text style={styles.rowValue}>$ 2,078.40 MXP</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.rowLabel}>Total</Text>
              <Text style={styles.rowValue}>$ 15,068.40 MXP</Text>
            </View>
          </View>

          <View style={styles.bottomView}>
            <Button type="pre" nextText="PREVIOUS" buttonStyle={{marginLeft:20}} onPress={()=>Actions.pop()}/>
            <Button type="next" nextText="NEXT" buttonStyle={{marginRight:20}} onPress={()=>Actions.extraPeople()}/>
          </View>
        </ScrollView>
      </View>
    )
  }

  didSelectIndex(index){
    console.log(index);
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomStay);
