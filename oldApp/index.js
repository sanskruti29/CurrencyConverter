import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
//import CurrencyList from './screens/CurrencyList';
//import Options from './screens/Options';
//import Themes from './screens/Themes';
//import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#004C99',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#797979',
  $darkText: '#343434',
});

//return a function () that then returns a component
export default()=> <Home/>; 
//export default()=> <CurrencyList/>;
//export default()=> <Options/>;
//export default() => <Themes/>;
//export default()=> <Navigator/>;