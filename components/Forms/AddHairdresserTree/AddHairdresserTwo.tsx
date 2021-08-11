import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import {View, Text} from "react-native";
import { Input } from "react-native-elements/dist/input/Input";


interface Props {
  email : string 
  setEmail: (email : string) => void;
  number : string;
  setNumber: (number : string) => void;
  website : string 
  setWebsite: (website : string) => void;
  instagram : string 
  setInstagram: (instagram : string) => void;
  facebook : string 
  setFacebook: (facebook : string) => void;

}

const AddHairdresserTwo = (props : Props) => {
   
  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
      <View
          style={{
            flex: 0.1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: "5%",
          }}
        >
          <Text style={{ color: "#86C232", fontSize: 20, letterSpacing:3,fontFamily:"sans-serif-medium"}}>
            Add contact information:
          </Text>
          
        </View>
        <View style = {{flex:1, width: "90%", justifyContent:"center",marginLeft:"2%", marginTop:"3%"}}>
        <Input
        placeholder='Enter email..' 
        placeholderTextColor = "#474B4F"
        label = "Email"
        value = {props.email}
        onChangeText = {(text)=> props.setEmail(text)}
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
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
        keyboardType = "numeric"
        label = "Number"
        value = {props.number}
        onChangeText = {(text)=> props.setNumber(text)}
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "cellphone" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />

        <Input
        placeholder='Enter website url..' 
        placeholderTextColor = "#474B4F"
        label = "Website URL"
        value = {props.website}
        onChangeText = {(text)=> props.setWebsite(text)}
        keyboardType = "url"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "web"  type ="material-community"
            size={24}
            color='#61892F'
            />}
        />  
        <Input
        placeholder='Facebook url..' 
        placeholderTextColor = "#474B4F"
        label = "Facebook"
        keyboardType = "url"
        value = {props.facebook}
        onChangeText = {(text)=> props.setFacebook(text)}
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "facebook" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />

    <Input
        placeholder='Instagram url..' 
        placeholderTextColor = "#474B4F"
        label = "Instagram"
        keyboardType = "url"
        value = {props.instagram}
        onChangeText = {(text)=> props.setInstagram(text)}
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "instagram" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />
    </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default AddHairdresserTwo;
