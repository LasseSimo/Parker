import React from 'react';
import { StyleSheet, View, Image ,TouchableOpacity } from 'react-native';
import {Constants} from "@common"
import {Text} from "../index"

class TabView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex:props.selectedIndex
    }
  }

  render(){
    var {items} = this.props

    var tabItems = []
    for (var i = 0; i < items.length; i++) {
      tabItems.push(this.getTabItem(i,items[i],i==items.length-1))
    }
    return (
      <View style={styles.container}>
        {tabItems}
      </View>
    )
  }

  getTabItem(index,text,isLast){
    return (
      <TouchableOpacity style={[styles.itemView,{flex:this.props.items.length}]} onPress={()=>{this.setState({selectedIndex:index});this.props.onDidSelectIndex(index)}}>
        <View style={[styles.contentItem,!isLast && styles.separator]}>
          <Text style={styles.text}>{text}</Text>
          {this.state.selectedIndex==index && <Image source={require("@images/ic_select.png")} style={styles.iconSelect}/>}
        </View>
        <View style={[styles.line,this.state.selectedIndex==index && {backgroundColor:"white"}]}/>
      </TouchableOpacity>
    )
  }
}

TabView.defaultProps = {
  selectedIndex:0
}

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:Constants.APP_COLOR,
    flexDirection:"row"
  },
  itemView:{

  },
  contentItem:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  separator:{
    borderRightWidth:1,
    borderRightColor:"#8c94a6"
  },
  text:{
    color:"white",
    fontSize:20,
    fontWeight:"bold"
  },
  iconSelect:{
    marginLeft:10,
    width:10,
    height:10,
    resizeMode:"contain"
  },
  line:{
    height:3,
    backgroundColor:"#8c94a6"
  }
});

export default TabView;
