import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableHighlight, Alert, AsyncStorage } from 'react-native';

export class Register extends React.Component{
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            passwordConfirm:''
        };
    }

    cancelRegistration = ()=>{
        Alert.alert('Registration Cancelled');
        this.props.navigation.navigate('HomeRT');
    }

    registerAccount = ()=>{
        if(!this.props.username){
            Alert.alert('Please enter a username');
        } else if(this.props.password != this.props.passwordConfirm){
            Alert.alert('Passswords do not match');
        }else{
            AsyncStorage.getItem(this.props.username,(err,result)=>{
                if(result!=null){
                    Alert.alert(`${this.props.username} already exsits`);
                }else{
                    AsyncStorage.setItem(this.props.username, this.props.password,(err, result)=>{
                        Alert.alert(`${this.props.username} account created`);
                        this.props.navigation.navigate('HomeRT');
                    });
                }
            });
        }
    };

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.heading}> Register Account</Text>
                <TextInput
                    style = {styles.inputs}
                    onChangeText = {(value) => this.setState({username:value})}
                    value = {this.state.username}
                />
                <Text style = {styles.label}>Enter Username:</Text>

                <TextInput
                    style = {styles.inputs}
                    onChangeText = {(value) => this.setState({password:value})}
                    value = {this.state.password}
                    secureTextEntry = {true}
                />
                <Text style = {styles.label}>Enter Passsword:</Text>

                <TextInput
                    style = {styles.inputs}
                    onChangeText = {(value) => this.setState({passwordConfirm:value})}
                    value = {this.state.passwordConfirm}
                    secureTextEntry = {true}
                />
                <Text style = {styles.label}>Enter Confirm Passsword:</Text>
                
                <TouchableHighlight onPress = {this.registerAccount} underlayColor = '#31e981'>
                    <Text style = {styles.buttons}>
                        Register
                    </Text>
                </TouchableHighlight>
            
                <TouchableHighlight onPress = {this.cancelRegistration} underlayColor = '#31e981'>
                    <Text style = {styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        paddingBottom:'45%',
        paddingTop:'10%'
        
    },
    heading:{
        flex:1,
        fontSize:16
    },
    inputs:{
        flex:1,
        width:'80%',
        padding:10
    },
    label:{
        paddingBottom:10
    },
    buttons:{
        marginTop:15,
        fontSize:16 
    }
});