import {StyleSheet} from 'react-native';
import {Constants} from "@common"

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Constants.APP_COLOR,
  },
  message:{
      fontSize:14,
      margin:20,
  },
  content:{
    flexDirection:"row",
    marginTop:30,
    marginLeft:20,
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:30
  },
  inputContainer:{
    marginLeft:20,
    marginRight:20,
    marginTop:2,
    height:50,
    justifyContent:"center",
    backgroundColor:"white"
  },
  input:{
    height:40,
    margin:5,
    color:Constants.APP_COLOR
  },
  sizeContainer:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"center"
  },
  button:{
    marginLeft:1,
    width:46,
    height:42,
    backgroundColor:"white"
  },
  selectedButton:{
    backgroundColor:"#ffb01c"
  },
  textButton:{
    color:"black"
  },
  textSelectedButton:{
    fontWeight:"bold"
  },
  bottomView:{
    flex:1,
    alignItems:"flex-end",
    flexDirection:"row",
    justifyContent:"space-between",
  },
});
