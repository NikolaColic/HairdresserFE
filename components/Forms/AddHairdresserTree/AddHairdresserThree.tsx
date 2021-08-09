import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native'
import { Chip } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';

const AddHairdresserThree = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState(null);
  const [checked, setChecked] = React.useState<number>(0);
  const [items, setItems] = React.useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana1'},
    {label: 'Banana', value: 'banana2'},
    {label: 'Banana', value: 'banana3'},
    {label: 'Banana', value: 'banana4'},
    {label: 'Banana', value: 'banana5'},
    {label: 'Banana', value: 'banana6'},
  ]);
 
  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
            <View style = {{flex: 0.5,width: "90%", marginLeft:"5%"}}> 
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}>
                    Add owner:
                </Text>
                <DropDownPicker
                    
                    open={open}
                    value={value}
                    items={items}
                    searchable
                    loading
                    placeholder = "Search users.."
                    // onChangeSearchText
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    textStyle = {{color: "white"}}
                    style ={{backgroundColor:"#6B6E70", marginTop:"5%"}}
                    dropDownContainerStyle = {{backgroundColor:"#6B6E70"}}
                    searchContainerStyle ={{borderColor: "#61892F"}}
                    searchTextInputStyle = {{color:"white",backgroundColor:"#222629"}}
                    placeholderStyle ={{color:"white"}}
                    />
              </View>  
            <View style = {open ? {flex: 0.2,width: "90%", marginLeft:"5%", marginTop:"10%"} : {flex: 0.5,width: "90%", marginLeft:"5%", marginTop:"10%"}}> 

                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium",marginBottom:"5%"}}>
                    Add municipality:
                </Text>
                <Input
                  placeholder='Enter municipality id..' 
                  placeholderTextColor = "#474B4F"
                  
                  label = "Municipality"
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
            <View style = {{flex: 0.2,width: "90%", marginTop:"5%"} }> 
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium",marginBottom:"5%"}}>
                    Add gender:
                </Text>
                <View style = {{flexDirection:"row"}}>
                <CheckBox
                  containerStyle = {{backgroundColor:"transparent",borderColor:"transparent"}}
                  textStyle = {{fontSize:15, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}
                  title='Male'
                  checkedIcon='radiobox-marked'
                  iconType = "material-community"
                  checkedColor = "white"
                  checked = {checked == 1}
                  onPress = {()=> setChecked(1)}
                  uncheckedIcon='radiobox-blank'
                /> 
                <CheckBox
                  center
                  title='Female'
                  containerStyle = {{backgroundColor:"transparent",borderColor:"transparent"}}
                  textStyle = {{fontSize:15, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}
                  checkedIcon='radiobox-marked'
                  iconType = "material-community"
                  checkedColor = "white"
                  checked = {checked == 2}
                  onPress = {()=> setChecked(2)}
                  uncheckedIcon='radiobox-blank'
                  // checked={this.state.checked}
                /> 
                <CheckBox
                  right
                  title='Both'
                  textStyle = {{fontSize:15, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}
                  containerStyle = {{backgroundColor:"transparent",borderColor:"transparent"}}
                  checkedIcon='radiobox-marked'
                  iconType = "material-community"
                  checkedColor = "white"
                  checked = {checked == 3}
                  onPress = {()=> setChecked(3)}
                  uncheckedIcon='radiobox-blank'
                />  
                </View>
            </View>
            </View>
            
      </SafeAreaView>
    </React.Fragment>
  );
};

export default AddHairdresserThree;
