import 'react-native-gesture-handler';
import React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import HeaderComponent from '../Header/HeaderComponent';
import {View, Text} from 'react-native'
import { Chip } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button} from 'react-native-paper';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const AddReservation = () => {
    const [dateVisible, setDateVisible] = React.useState<boolean> (false);
    const [dateTitle, setDateTitle] = React.useState<string> ("Add datetime");

    const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
  ]);

    const handleConfirm = (date : Date) =>{
     
        setDateTitle(date.toLocaleDateString() + " " +date.toLocaleTimeString()); 
        setDateVisible(false);
    }
    return (
        <React.Fragment>
            <HeaderComponent  />
            <SafeAreaView style = {{flex: 1, backgroundColor: "#222629",flexDirection:"column"}}> 
            <View style = {{flex: 0.2,width: "90%", marginLeft:"5%"}}> 
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232"}}>
                    Choose your hairdresser:
                </Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    searchable
                    loading
                    // onChangeSearchText
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    textStyle = {{color: "white"}}
                    style ={{backgroundColor:"#6B6E70", marginTop:"3%"}}
                    dropDownContainerStyle = {{backgroundColor:"#6B6E70"}}
                    searchContainerStyle ={{borderColor: "#61892F"}}
                    searchTextInputStyle = {{color:"white",backgroundColor:"#222629"}}
                    placeholderStyle ={{color:"white"}}
                    />
                
            </View>
            <View style = {{flex: 0.2,width: "90%", marginLeft:"5%"}}>
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232"}}>
                    Choose date and time:
                </Text>
                <Chip title={dateTitle} 
                containerStyle = {{marginTop:"3%",width:"60%"}}
                buttonStyle ={{backgroundColor:"#61892F"}}
                onPress ={()=> setDateVisible(true)}/>
                
                        <DateTimePickerModal
                    isVisible={dateVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={()=> setDateVisible(false)}
                        />
            </View>
            <View style = {{flex: 0.4,width: "90%", marginLeft:"5%"}}>
            <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232"}}>
                    Add informations:
            </Text>
            <Input
                placeholder='Enter description..' 
                placeholderTextColor = "#474B4F"
                label = "Description"
                containerStyle = {{marginTop:"3%"}}
                labelStyle = {{color:"#61892F"}}
                inputContainerStyle = {{borderColor: "#474B4F"}}
                inputStyle = {{color:"white"}}
                leftIcon={
                    <Icon
                    name = "alpha-s-circle-outline" type ="material-community"
                    size={24}
                    color='#61892F'
                    />}
            /> 
            <Input
                placeholder='Enter note..' 
                placeholderTextColor = "#474B4F"
                label = "Note"
                labelStyle = {{color:"#61892F"}}
                containerStyle = {{marginTop:"3%"}}

                inputContainerStyle = {{borderColor: "#474B4F"}}
                inputStyle = {{color:"white"}}
                leftIcon={
                    <Icon
                    name = "alpha-s-circle-outline" type ="material-community"
                    size={24}
                    color='#61892F'
                    />}
            /> 
            
            <Chip 
                title="Create reservation"
                containerStyle = {{width:"95%", marginLeft:"4%"}}
                buttonStyle = {{height:"45%",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:20, letterSpacing:3}}
            />
            </View>

         </SafeAreaView>
        </React.Fragment>
    )
}

export default AddReservation;