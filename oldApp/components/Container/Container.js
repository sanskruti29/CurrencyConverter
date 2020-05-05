//Container component wraps each screen in the app
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { View} from 'react-native';

const Container = ({children}) => ( //set up component, no state needed. //children is the prop
    <View style ={styles.container}> 
        {children} 
    </View>
);
Container.propTypes = {
    children: PropTypes.any,
};

export default Container;