import {StyleSheet} from 'react-native';
import {Constants} from "@common"

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  },
  content:{
    flex:1,
    width:null,
    height:null,
    resizeMode:"contain",
    backgroundColor:Constants.APP_COLOR,
    justifyContent:"flex-end"
  },
  title:{
    fontSize:35,
    fontWeight:"bold",
    color:"white",
    width:250,
    marginBottom:70,
    marginLeft:30,
    backgroundColor:"transparent"
  },
  logo:{
    marginBottom:10,
    marginLeft:18,
    width:150,
    height:50,
    resizeMode:"contain"
  },
  bottomView:{
    height:150,
    justifyContent:"center",
  },
  signUpView:{
    flexDirection:"row",
    height:50,
    marginLeft:30,
    marginRight:30,
    borderColor:Constants.APP_COLOR,
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center"
  },
  signUpText:{
    fontWeight:"900",
    color:Constants.APP_COLOR,
    marginRight:20
  },
  signUpIcon:{
    width:20,
    height:20,
    resizeMode:"contain",
    tintColor:Constants.APP_COLOR
  }
});
