/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import { AppRegistry, StatusBar } from 'react-native';

 import Root from './src/app/main/Root';

 StatusBar.setBarStyle('light-content');
 StatusBar.setHidden(true,false)
AppRegistry.registerComponent('Parker', () => Root);
