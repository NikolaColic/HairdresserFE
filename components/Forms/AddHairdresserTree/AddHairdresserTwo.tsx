import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import {View, Text} from "react-native";
import { Input } from "react-native-elements/dist/input/Input";

const AddHairdresserTwo = () => {
   
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
          <Text style={{ color: "#86C232", fontSize: 20, letterSpacing:3}}>
            Add contact information:
          </Text>
          
        </View>
        <View style = {{flex:1, width: "90%", justifyContent:"center",marginLeft:"2%", marginTop:"3%"}}>
        <Input
        placeholder='Enter email..' 
        placeholderTextColor = "#474B4F"
        label = "Email"
        labelStyle = {{color:"#61892F"}}
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
        labelStyle = {{color:"#61892F"}}
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
        keyboardType = "url"
        labelStyle = {{color:"#61892F"}}
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
        labelStyle = {{color:"#61892F"}}
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
        labelStyle = {{color:"#61892F"}}
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
