import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

//root navigator, thats the one our application cares about
export default createStackNavigator(
    {
        Home:{
            screen: Home,
        },
        CurrencyList:{
            screen: CurrencyList,
        },
    }
);