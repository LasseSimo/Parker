import React from 'react';
import {
  StyleSheet,
  Image,
  Platform
}from 'react-native'
import { Router, Reducer, Scene,Actions,ActionConst } from 'react-native-router-flux';
import {Constants} from "../common"
import Pages from '../pages';
import {Drawer} from "../../theme"
var EventEmitter = require('EventEmitter');

const createReducer = params => {
  const defaultReducer = new Reducer(params);

  return (state, action) => {
    return defaultReducer(state, action);
  }
};

class AppRouter extends React.Component {
  componentWillMount() {
        this.eventEmitter = new EventEmitter();

  }

  render() {
    return (
      <Router createReducer={createReducer} navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle} >
            <Scene key="introduction" component={Pages.Introduction} hideNavBar initial/>
            <Scene key="register" component={Pages.Registration} hideNavBar />
            <Scene key="address" component={Pages.Address} hideNavBar />
            <Scene key="roomStay" component={Pages.RoomStay} hideNavBar />
            <Scene key="extraPeople" component={Pages.ExtraPeople} hideNavBar />
      </Router>
    );
  }

}

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor:Constants.APP_COLOR
  },
  titleStyle:{
    color:"white",
    fontFamily: 'Helvetica',
    fontWeight:"bold",
    fontSize:16
  }
});
module.exports = AppRouter;
