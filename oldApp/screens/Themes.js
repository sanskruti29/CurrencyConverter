import React,{Component} from 'react';
import {ScrollView, StatusBar, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ListItem,Separator} from '../components/List';

//we need to setup local stylesheet in order to use the global variables
const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends Component {
    handleThemePress = (color) => {
        console.log('press theme', color);
    }
    render(){
        return(
            <ScrollView>
                <StatusBar 
                    translucent={false}
                    barStyle="default"
                />
                <ListItem
                    text="Blue"
                    onPress={()=>this.handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={()=>this.handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={()=>this.handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={()=>this.handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
                <Separator />
            </ScrollView>
        );
    }
}


export default Themes;