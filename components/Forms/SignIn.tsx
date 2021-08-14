import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation} from '@react-navigation/native';
import HeaderComponent from '../Header/HeaderComponent';
import { Input } from 'react-native-elements/dist/input/Input';
import { Chip } from 'react-native-elements/dist/buttons/Chip';


interface Props  {
    SignInApi : (username : string, password : string) => void;
    text : string;
}
const SignIn = (props : Props) =>{
    const [username, setUsername] = React.useState<string> ("");
    const [text, setText] = React.useState<string | null> (null);
    const [password, setPassword] = React.useState<string> ("");
    const navigation = useNavigation();
    
    const SignInApi = () =>{
        if(username.length === 0) {
            setText("You must entry text for username;");
            return;
        }
        if(password.length <5){
            setText("Password must have at least 5 characketers");
            return;
        }
        props.SignInApi(username, password);
    }
    return (
        <React.Fragment>
        <HeaderComponent text = {props.text} />

            <View style = {{flex: 1, backgroundColor: "#222629",flexDirection:"column"}}> 
                <View style = {{flex: 0.3, alignItems: "center", justifyContent: "center"}}>
                    
                    <Icon name = "account-circle" color = "#61892F" type ="material-community" size= {150}/>

                </View>
                <View style = {{flex:0.5, width: "90%", marginLeft:"5%"}}>
                <Input
        placeholder='Enter username..' 
        placeholderTextColor = "#474B4F"
        label = "Username"

        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {username}
        onChangeText = {(username) => setUsername(username)}
        leftIcon={
            <Icon
            name = "alpha-u-circle-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 
        <Input
        placeholder='Enter password..' 
        placeholderTextColor = "#474B4F"
        label = "Password"
        secureTextEntry
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
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
                containerStyle = {{width:"80%", marginLeft:"9%"}}
                buttonStyle = {{height:"40%",alignContent:"center",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:20, letterSpacing:3,fontFamily:"sans-serif-medium"}}
                onPress = {()=> SignInApi()}
            />
            </View>
            <View style = {{flex: 0.2, alignItems: "center"}}>
                <Text style = {{color:"#6B6E70", fontSize: 20,fontFamily:"sans-serif-medium", marginTop:"3%"}}>Don't have an account? 
                <Text style = {{color:"#86C232"}} onPress = {()=> navigation.navigate('Sign Up')}> Create one</Text></Text>
            </View>
            </View>
            <Snackbar
            visible = {text != null}
            onDismiss = {() => setText(null)}
            style = {{backgroundColor:"#61892F", width:"85%",marginLeft:"7%",borderColor:"#222629",borderRadius:7}}
            duration = {3000}
            action={{
                label: "X",
                onPress: () => {
                  setText(null)
                },
              }}>
            <Text style = {{color:"white", fontSize:18,textAlign:"center"}}>
                {text}
            </Text>
            </Snackbar>
        </React.Fragment>
    );
}

export default SignIn;