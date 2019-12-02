import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn:false};
    }

    toggleUser = ()=>{
        this.setState(previousState=>{
            return { isLoggedIn:!previousState.isLoggedIn };
        });
    }

    render(){
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return(
            <View style={styles.headStyle}>
                <Image
                    style = {styles.logoImage}
                    source = {require('./img/apple_logo.png')}
                />
                <Text 
                    style = {styles.headText}
                    onPress = {this.toggleUser}>{display}
                    </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 12
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#35605a',
        borderBottomWidth: 2,
        borderColor: '#000000',
        flex:1,
        flexDirection: 'row',
    },
    logoImage:{
        paddingBottom: 5,
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5,
        flex: 1,
        width: undefined,
        height: undefined
    }
});