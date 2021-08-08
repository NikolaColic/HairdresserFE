import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation,DrawerActions } from '@react-navigation/native';
import HeaderComponent from '../Header/HeaderComponent';
import { Input } from 'react-native-elements/dist/input/Input';
import { Chip } from 'react-native-elements/dist/buttons/Chip';


const SignIn = () =>{
    const [username, setUsername] = React.useState<string> ("");
    const [text, setText] = React.useState<string> ("");
    const [password, setPassword] = React.useState<string> ("");
    const [visible, setVisible] = React.useState<boolean> (false);
    const navigation = useNavigation();
    const SetValues = () => {
        if(username == "miljana"){
            setVisible(true);
            setText("Cao gospodjice Miljana")
        }
        if(username == "rad"){
            setVisible(true);
            setText("Hteo sam da te pitam sta radis?")
        }
        if(username == "zlatibor"){
            setVisible(true);
            setText("Kakvi su ti krajnji utisci sa radionica?")
        }
        if(username == "projekat"){
            setVisible(true);
            setText("btw ovo za master pravim neku apl :) ")
        }
    }
    return (
        <React.Fragment>
        <HeaderComponent  />

            <View style = {{flex: 1, backgroundColor: "#222629",flexDirection:"column"}}> 
                <View style = {{flex: 0.3, alignItems: "center", justifyContent: "center"}}>
                    
                    <Icon name = "account-circle" color = "#61892F" type ="material-community" size= {150}/>

                </View>
                <View style = {{flex:0.5, width: "90%", marginLeft:"5%"}}>
                <Input
        placeholder='Enter username..' 
        placeholderTextColor = "#474B4F"
        label = "Username"

        labelStyle = {{color:"#61892F"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {username}
        onChangeText = {(username) => setUsername(username)}
        leftIcon={
            <Icon
            name = "alpha-s-circle-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 
        <Input
        placeholder='Enter password..' 
        placeholderTextColor = "#474B4F"
        label = "Password"
        secureTextEntry
        labelStyle = {{color:"#61892F"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {password}
        onChangeText = {(password) => setPassword(password)}
        leftIcon={
            <Icon
            name = "lock-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 

            <Chip
                title="SIGN IN"
                containerStyle = {{width:"95%", marginLeft:"4%"}}
                buttonStyle = {{height:"40%",alignContent:"center",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:20, letterSpacing:3}}
            />
            </View>
            <View style = {{flex: 0.2, alignItems: "center"}}>
                <Text style = {{color:"#6B6E70", fontSize: 20}}>Don't have an account? <Text style = {{color:"#86C232"}}>Create one</Text></Text>
            </View>
            </View>
            <Snackbar
            visible = {visible}
            onDismiss = {() => setVisible(false)}
            duration = {5000}
            action={{
                label: 'X',
                onPress: () => {
                  setVisible(false)
                },
              }}>
            
                {text}
            </Snackbar>
        </React.Fragment>
    );
}

export default SignIn;