import {StyleSheet} from 'react-native';
import {Constants} from "@common"

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  },
  message:{
      fontSize:14,
      margin:20,
  },
  content:{
    flex:1,
    backgroundColor:Constants.APP_COLOR
  },
  inputContainer:{
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    borderColor:"white",
    borderWidth:1,
    height:50,
    justifyContent:"center"
  },
  input:{
    height:40,
    margin:5,
    color:"white"
  },
  bottomView:{
    height:120,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between"
  },
});
