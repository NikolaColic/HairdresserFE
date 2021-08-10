import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation} from '@react-navigation/native';
import HeaderComponent from '../../Header/HeaderComponent';
import { Input } from 'react-native-elements/dist/input/Input';
import { Chip } from 'react-native-elements/dist/buttons/Chip';



const ChangePassword = () =>{
    const [username, setUsername] = React.useState<string> ("");
    const [text, setText] = React.useState<string> ("");
    const [password, setPassword] = React.useState<string> ("");
    const [passVisible, setPassVisible] = React.useState<boolean> (true);
    const [visible, setVisible] = React.useState<boolean> (false);
    const [passVisible1, setPassVisible1] = React.useState<boolean> (false);
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
        <HeaderComponent />

            <View style = {{flex: 1, backgroundColor: "#222629",flexDirection:"column"}}> 
                <View style = {{flex: 0.3, alignItems: "center", justifyContent: "center"}}>
                    
                    <Icon  color = "#61892F" name="lock-outline" type="material-community" size= {150}/>

                </View>
                <View style = {{flex:0.5, width: "90%", marginLeft:"5%"}}>
                <Input
        placeholder='New password..' 
        placeholderTextColor = "#474B4F"
        label = "New password"
        secureTextEntry = {passVisible}
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {username}
        onChangeText = {(username) => setUsername(username)}
        rightIcon={
            <Icon
            name = "eye" type ="material-community"
            size={24}
            color='#61892F'
            onPress = {()=> setPassVisible(!passVisible)}
            />}
        /> 
        <Input
        placeholder='Confirm password..' 
        placeholderTextColor = "#474B4F"
        label = "Confirm password"
        secureTextEntry = {passVisible}
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {password}
        onChangeText = {(password) => setPassword(password)}
        rightIcon={
            <Icon
            name = "eye" type ="material-community"
            size={24}
            color='#61892F'
            onPress = {()=> setPassVisible1(!passVisible1)}
            />}
        /> 
                    <Chip
                title="SIGN IN"
                containerStyle = {{width:"89%", marginLeft:"6%"}}
                buttonStyle = {{height:"40%",alignContent:"center",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:20, letterSpacing:3,fontFamily:"sans-serif-medium"}}
            />

                </View>
                <View style = {{flex: 0.2, alignItems: "center"}}>
                    <Text style = {{color:"#6B6E70", fontSize: 20, width:"80%", textAlign:'center', marginTop:"3%"}}>Do you want to update your account? 
                    <Text style = {{color:"#86C232"}} onPress = {()=> navigation.navigate('Edit profile')}>Click here</Text></Text>
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

export default ChangePassword;