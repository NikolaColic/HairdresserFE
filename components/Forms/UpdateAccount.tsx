import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../Header/HeaderComponent";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation} from '@react-navigation/native';
import { Input } from "react-native-elements/dist/input/Input";
import { Chip } from "react-native-elements/dist/buttons/Chip";


const UpdateAccount = () => {
    const [name, setName] = React.useState<string> ("");
    const [surname, setSurname] = React.useState<string> ("");
    const [email, setEmail] = React.useState<string> ("");
    const [mobile, setMobile] = React.useState<string> ("");
    const [username, setUsername] = React.useState<string> ("");
    const navigation = useNavigation();


  return (
    <React.Fragment>
      <HeaderComponent  />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }}
      >
       
        <View style = {{width: "85%",alignContent:"center", justifyContent:"flex-start",marginLeft:"8%", marginTop:"1%"}}>
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
              <Chip
                title="UPDATE ACCOUNT"
                containerStyle = {{width:"80%", marginLeft:"10%"}}
                buttonStyle = {{backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:17, letterSpacing:3,fontFamily:"sans-serif-medium"}}
            />
            <Chip
                title="CHANGE PASSWORD"
                containerStyle = {{width:"80%", marginLeft:"10%",marginTop:"5%"}}
                buttonStyle = {{alignContent:"center",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:17, letterSpacing:3,fontFamily:"sans-serif-medium"}}
                onPress = {()=> navigation.navigate('Change password')}

            />
             
          </View>
          
      </SafeAreaView>
    </React.Fragment>
  );
};

export default UpdateAccount;
