import React from 'react';
import {TouchableOpacity, View, Text, Image, ShadowPropTypesIOS} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ClearButton = ({text, onPress}) => (
    //const {text, onPress} = props;
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
  };

export default ClearButton; 