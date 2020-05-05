import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, Keyboard, Animated, Platform, StyleSheet} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component{
    static propTypes = {
        tintColor: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state ={
            containerImageWidth: new Animated.Value(styles.$largeContainerSize),
            imageWidth: new Animated.Value(styles.$largeImageSize),
        };
    }
    
    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`, 
            this.keyboardWillShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`, 
            this.keyboardWillHide,
        );
    }

    //Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    } 

    keyboardWillShow =() =>{
        //console.log('Keyboard did show');
        const { containerImageWidth, imageWidth } = this.state;
        Animated.parallel([
            Animated.timing(containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };

    keyboardWillHide =() => {
        //console.log('keyboard did hide');
        const { containerImageWidth, imageWidth } = this.state;
        Animated.parallel([
            Animated.timing(containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };
    
    render(){
        const { containerImageWidth, imageWidth } = this.state;
        const { tintColor } = this.props;
        const containerImageStyles = [
            styles.containerImage, //old styles
            { width: containerImageWidth, height: containerImageWidth },
        ];
        const imageStyles = [
            styles.logo, //old styles
            { width: imageWidth},
            tintColor ? { tintColor } : null,
        ];
        return(
            <View style={styles.container}>
                <Animated.View style={containerImageStyles}>
                    <Animated.Image
                        resizeMode="contain" 
                        style={[StyleSheet.absoluteFill, containerImageStyles ]}
                        source={require('./images/background.png')}
                    />
                    <Animated.Image 
                        resizeMode="contain" 
                        style={imageStyles}
                        source={require('./images/logo2.png')}
                    />
                </Animated.View>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;