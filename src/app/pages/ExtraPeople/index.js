import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Switch
}from 'react-native'
import {Text,Progress,Header,Button,TabView} from "@theme"
import styles from "./index_style"
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import {Constants} from "@common"

class ExtraPeople extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSize:0,
      isOn:true
    }
  }

  render(){
    return (
      <View style={styles.container} >
        <Header title="EXTRA PEOPLE" headerStyle={{height:30,justifyContent:"flex-end",paddingBottom:1}}/>

        <View style={[styles.inputContainer,{marginLeft:20,marginRight:20,marginTop:5}]}>
          <TextInput style={styles.input} placeholder="Name of extra person" placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
        </View>

        <TabView items={["Male","Female"]} onDidSelectIndex={this.didSelectIndex.bind(this)}/>
        <View style={styles.sizeContainer}>
          <Button text="S" style={[styles.button,this.state.selectedSize==0 && styles.selectedButton]} textStyle={[styles.textButton,this.state.selectedSize==0 && styles.textSelectedButton]} onPress={()=>this.setState({selectedSize:0})}/>
          <Button text="M" style={[styles.button,this.state.selectedSize==1 && styles.selectedButton]} textStyle={[styles.textButton,this.state.selectedSize==1 && styles.textSelectedButton]} onPress={()=>this.setState({selectedSize:1})}/>
          <Button text="L" style={[styles.button,this.state.selectedSize==2 && styles.selectedButton]} textStyle={[styles.textButton,this.state.selectedSize==2 && styles.textSelectedButton]} onPress={()=>this.setState({selectedSize:2})}/>
          <Button text="XL" style={[styles.button,this.state.selectedSize==3 && styles.selectedButton]} textStyle={[styles.textButton,this.state.selectedSize==3 && styles.textSelectedButton]} onPress={()=>this.setState({selectedSize:3})}/>
          <Button text="XXL" style={[styles.button,this.state.selectedSize==4 && styles.selectedButton]} textStyle={[styles.textButton,this.state.selectedSize==4 && styles.textSelectedButton]} onPress={()=>this.setState({selectedSize:4})}/>
          <Button text="XXXL" style={[styles.button,this.state.selectedSize==5 && styles.selectedButton]} textStyle={[styles.textButton,this.state.selectedSize==5 && styles.textSelectedButton]}  onPress={()=>this.setState({selectedSize:5})}/>
        </View>
        <View style={styles.content}>
          <View  style={{flexDirection:"row"}}>
            <Switch onTintColor="#ffb01c" tintColor="white" onValueChange={(isOn)=>this.setState({isOn})} value={this.state.isOn}/>
            <Text style={{fontSize:17,color:"white",marginLeft:10,fontWeight:"bold"}}>Minor</Text>
          </View>
          <View style={[styles.inputContainer,{width:100}]}>
            <TextInput style={styles.input} placeholder="Age..." placeholderTextColor="#7b8292" underlineColorAndroid='transparent'/>
          </View>
        </View>


        <View style={{flex:1,backgroundColor:"white",zIndex:3}}>
          <View style={{flex:1,alignItems:"center"}}>
            <Button type="image" source={require("@images/ic_yellow_add.png")} imageStyle={{width:40,height:40,resizeMode:"contain"}} buttonStyle={{position:"absolute",top:-20}} onPress={()=>{}}/>
          </View>
          <View style={styles.bottomView}>
            <Button type="pre" nextText="PREVIOUS" buttonStyle={{marginLeft:20,marginBottom:20}} onPress={()=>Actions.pop()}/>
            <Button type="next" nextText="NEXT" buttonStyle={{marginRight:20,marginBottom:20}} onPress={()=>{}}/>
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExtraPeople);
