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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Address extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <View style={styles.container} >
        <Progress percent={0.2}/>
        <Header title="ADDRESS"/>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            mapType={"standard"}
            region={{latitude: 37.78825,longitude: -122.4324,latitudeDelta: 0.0043,longitudeDelta:0.0034}}
            showsUserLocation={true}
          >
          </MapView>
          <View style={styles.searchContainer}>
            <Image source={require("@images/ic_search.png")} style={styles.iconSearch}/>
            <TextInput
              placeholder="Search..."
              style={styles.inputSearch}
              placeholderTextColor="#C7C7C7"
              autoCorrect={false}
              underlineColorAndroid='transparent'
              autoCapitalize="none"/>
            <Button type="image" source={require("@images/ic_clear_search.png")} imageStyle={styles.btnClearIcon} onPress={()=>{}}/>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Address" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <View style={[styles.inputContainer,{flex:3}]}>
              <TextInput style={styles.input} placeholder="Number" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
            </View>
            <View style={[styles.inputContainer,{flex:3}]}>
              <TextInput style={styles.input} placeholder="Apt" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
            </View>
            <View style={[styles.inputContainer,{flex:3}]}>
              <TextInput style={styles.input} placeholder="Zip" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
            </View>
          </View>
          <View style={[styles.inputContainer, {flexDirection:"row",alignItems:"center"}]}>
            <TextInput style={[styles.input,{flex:1}]} placeholder="Town" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
            <Button type="image" source={require("@images/ic_down_arrow.png")} imageStyle={{width:30,height:30,resizeMode:"contain",marginRight:10}} onPress={()=>{}}/>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <View style={[styles.inputContainer,{flex:2}]}>
              <TextInput style={styles.input} placeholder="City" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
            </View>
            <View style={[styles.inputContainer,{flex:2}]}>
              <TextInput style={styles.input} placeholder="State" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
            </View>
          </View>
          <View style={styles.bottomView}>
            <Button type="pre" nextText="PREVIOUS" buttonStyle={{marginLeft:20}} onPress={()=>Actions.pop()}/>
            <Button type="next" nextText="NEXT" buttonStyle={{marginRight:20}} onPress={()=>Actions.roomStay()}/>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Address);
