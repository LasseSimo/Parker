import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from "../index"

class Progress extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      progressWidth:0
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Text style={styles.percent}>{this.props.percent*100}%</Text>
        <View style={styles.progressContainer} onLayout={(event) =>this.setState({progressWidth:event.nativeEvent.layout.width})}>
          <View style={[styles.progress,{width:this.props.percent*this.state.progressWidth}]}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#334361",
    height:40,
    flexDirection:"row",
    alignItems:"center"
  },
  progressLabel:{
    color:"white",
    marginLeft:20,
    fontSize:15
  },
  percent:{
    color:"white",
    fontSize:17,
    fontWeight:"600",
    marginLeft:5
  },
  progressContainer:{
    flex:1,
    height:18,
    marginLeft:10,
    marginRight:20,
    backgroundColor:"white"
  },
  progress:{
    backgroundColor:"#ffb01c",
    flex:1
  }
});

export default Progress;
