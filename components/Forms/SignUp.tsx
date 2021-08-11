import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../Header/HeaderComponent";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Input } from "react-native-elements/dist/input/Input";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import { User } from "../../model/User";


interface Props  {
  SignUpApi : (user : User) => void;
  text : string;
}


const UpdateAccount = (props : Props) => {
    const [name, setName] = React.useState<string> ("");
    const [surname, setSurname] = React.useState<string> ("");
    const [email, setEmail] = React.useState<string> ("");
    const [mobile, setMobile] = React.useState<string> ("");
    const [username, setUsername] = React.useState<string> ("");
    const [password, setPassword] = React.useState<string> ("");

    const SignUpApi = ()=>{
      var user : User = new User(0,name,surname,username,email,new Date(),mobile,password,"",[],[],[]);
      props.SignUpApi(user);
    }

  return (
    <React.Fragment>
      <HeaderComponent text = {props.text} />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }}
      >
        
        <View style = {{flex:1, width: "85%", alignContent:"center", justifyContent:"flex-start",marginLeft:"5%"}}>
        <Input
        placeholder='Enter name..' 
        placeholderTextColor = "#474B4F"
        label = "Name"

        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {name}
        onChangeText = {(name) => setName(name)}
        leftIcon={
            <Icon
            name = "alpha-n-circle-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 
        <Input
        placeholder='Enter surname..' 
        placeholderTextColor = "#474B4F"
        label = "Surname"

        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {surname}
        onChangeText = {(surname) => setSurname(surname)}
        leftIcon={
            <Icon
            name = "alpha-s-circle-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 
        <Input
        placeholder='Enter email..' 
        placeholderTextColor = "#474B4F"
        label = "Email"
        keyboardType = "email-address"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {email}
        onChangeText = {(email) => setEmail(email)}
        leftIcon={
            <Icon
            name = "email-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 
        <Input
        placeholder='Enter number..' 
        placeholderTextColor = "#474B4F"
        label = "Number"
        keyboardType = "number-pad"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        value = {mobile}
        onChangeText = {(mobile) => setMobile(mobile)}
        leftIcon={
            <Icon
            name = "cellphone" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 
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
                title="SIGN UP"
                containerStyle = {{width:"80%", marginLeft:"10%"}}
                buttonStyle = {{height:"29%",alignContent:"center",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:20, letterSpacing:3,fontFamily:"sans-serif-medium"}}
                onPress = {()=> SignUpApi()}
            />
          </View>
          
      </SafeAreaView>
    </React.Fragment>
  );
};

export default UpdateAccount;
