import "react-native-gesture-handler";
import React from "react";
import { Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Input } from "react-native-elements/dist/input/Input";

interface Props {
  description : string 
  setDescription: (email : string) => void;
  pricelist : string;
  setPricelist: (number : string) => void;

}

const AddHairdresserFour = (props : Props) => {
   
  return (
    <React.Fragment>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }}
      >
        <View
          style={{
            flex: 0.1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: "5%",
          }}
        >
          <Text style={{ color: "#86C232", fontSize: 20, letterSpacing:1.5}}>
            Add description and pricelist:
          </Text>
          
        </View>
        <View style = {{flex:0.9, width: "90%", justifyContent:"center",marginLeft:"2%", marginTop:"3%"}}>
        <Input
        placeholder='Enter description..' 
        placeholderTextColor = "#474B4F"
        multiline
        value = {props.description}
        onChangeText = {(text)=> props.setDescription(text)}
        maxLength = {500}
        numberOfLines = {7}
        label = "Description"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "text-box" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />

    <Input
        placeholder='Enter priclist..' 
        placeholderTextColor = "#474B4F"
        label = "Pricelist"
        multiline
        value = {props.pricelist}
        onChangeText = {(text)=> props.setPricelist(text)}
        maxLength = {500}
        numberOfLines = {7}
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "cash-multiple" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />

        
          </View>
          
      </SafeAreaView>
    </React.Fragment>
  );
};

export default AddHairdresserFour;
