import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../Header/HeaderComponent";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation} from '@react-navigation/native';
import { Input } from "react-native-elements/dist/input/Input";


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
       
        <View style = {{width: "85%", alignContent:"center", justifyContent:"flex-start",marginLeft:"8%", marginTop:"1%"}}>
        <Input
        placeholder='Enter name..' 
        placeholderTextColor = "#474B4F"
        label = "Name"

        labelStyle = {{color:"#61892F"}}
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

        labelStyle = {{color:"#61892F"}}
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
        labelStyle = {{color:"#61892F"}}
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
        labelStyle = {{color:"#61892F"}}
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
              <Button
                  mode = "outlined"
                  style = {{backgroundColor: "#86C232", justifyContent:"center", height:45,marginBottom:"5%"}}
              >
                  <Text style = {{color:"#222629",fontSize: 20}}>
                      Sign up
                  </Text>
              </Button>
              <Button
                  mode = "outlined"
                  style = {{backgroundColor: "#86C232", justifyContent:"center", height:45}}
                  onPress = {()=> navigation.navigate('Change password')}
              >
                  <Text style = {{color:"#222629",fontSize: 20}}>
                      Change password
                  </Text>
              </Button>

          </View>
          
      </SafeAreaView>
    </React.Fragment>
  );
};

export default UpdateAccount;
