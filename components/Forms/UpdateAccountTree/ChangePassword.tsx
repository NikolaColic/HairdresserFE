import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation} from '@react-navigation/native';
import HeaderComponent from '../../Header/HeaderComponent';
import { Input } from 'react-native-elements/dist/input/Input';
import { Chip } from 'react-native-elements/dist/buttons/Chip';
import { User } from '../../../model/User';

interface Props  {
    UpdateAccount : (user : User, isChange : boolean) => void;
    user : User;
    text : string;
}

const ChangePassword = (props : Props) =>{
    const [password, setPassword] = React.useState<string> ("");
    const [password1, setPassword1] = React.useState<string> ("");
    const [passVisible, setPassVisible] = React.useState<boolean> (true);
    const [passVisible1, setPassVisible1] = React.useState<boolean> (false);
    const navigation = useNavigation();
   
    const ChangePassword = () =>{
        if(password !== password1){
            return;
        }
        props.user.password= password;
        props.UpdateAccount(props.user,true);
    }
    return (
        <React.Fragment>
        <HeaderComponent text = {props.text} />

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
        value = {password}
        onChangeText = {(password) => setPassword(password)}
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
        value = {password1}
        onChangeText = {(password1) => setPassword1(password1)}
        rightIcon={
            <Icon
            name = "eye" type ="material-community"
            size={24}
            color='#61892F'
            onPress = {()=> setPassVisible1(!passVisible1)}
            />}
        /> 
                    <Chip
                title="CHANGE PASSWORD"
                containerStyle = {{width:"89%", marginLeft:"6%", marginBottom:"15%"}}
                buttonStyle = {{height:"40%",alignContent:"center",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:20, letterSpacing:3,fontFamily:"sans-serif-medium"}}
                onPress = {()=> ChangePassword()}
            />

                </View>
                <View style = {{flex: 0.2, alignItems: "center"}}>
                    <Text style = {{color:"#6B6E70", fontSize: 20, width:"80%", textAlign:'center', marginTop:"3%"}}>Do you want to update your account? 
                    <Text style = {{color:"#86C232"}} onPress = {()=> navigation.navigate('Edit profile')}>Click here</Text></Text>
                </View>
            </View>
         
        </React.Fragment>
    );
}

export default ChangePassword;