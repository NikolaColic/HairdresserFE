import "react-native-gesture-handler";
import React from "react";
import { Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Input } from "react-native-elements/dist/input/Input";

interface Props {
  name : string 
  setName: (name : string) => void;
  parentId : string;
  setParentId: (parentId : string) => void;
  taxId : string 
  setTaxId: (taxId : string) => void;
  adress : string 
  setAdress: (adress : string) => void;

}

const AddHairdresserOne = (props : Props) => {
   
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
          <Text style={{ color: "#86C232", fontSize: 20, letterSpacing:3,fontFamily:"sans-serif-medium"}}>
            Add basic information:
          </Text>
          
        </View>
        <View style = {{flex:0.9, width: "90%", justifyContent:"center",marginLeft:"2%", marginTop:"3%"}}>
        <Input
        placeholder='Enter name..' 
        placeholderTextColor = "#474B4F"
        label = "Name"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "account-circle" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />

    <Input
        placeholder='Enter adress..' 
        placeholderTextColor = "#474B4F"
        label = "Adress"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "map-marker-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />

        <Input
        placeholder='Enter tax id..' 
        placeholderTextColor = "#474B4F"
        label = "Tax id"
        keyboardType = "numeric"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "cash" type ="material-community"
            size={24}
            color='#61892F'
            />}
        />  

    <Input
        placeholder='Enter parent id..' 
        placeholderTextColor = "#474B4F"
        label = "Parent id"
        keyboardType = "numeric"
        labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
        inputContainerStyle = {{borderColor: "#474B4F"}}
        inputStyle = {{color:"white"}}
        leftIcon={
            <Icon
            name = "bank-outline" type ="material-community"
            size={24}
            color='#61892F'
            />}
        /> 
              
          </View>
          
      </SafeAreaView>
    </React.Fragment>
  );
};

export default AddHairdresserOne;
