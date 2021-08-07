import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native'
import { Chip } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const AddHairdresserThree = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState(null);
  const [open2, setOpen2] = React.useState<boolean>(false);
  const [value2, setValue2] = React.useState(null);
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
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232"}}>
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
            <View style = {open ? {flex: 0.5,width: "90%", marginLeft:"5%", marginTop:"25%"} : {flex: 0.5,width: "90%", marginLeft:"5%", marginTop:"20%"}}> 

                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232"}}>
                    Add municipality:
                </Text>
                
                <DropDownPicker
                    
                    open={open2}
                    value={value2}
                    items={items}
                    loading
                    // onChangeSearchText
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems}
                    textStyle = {{color: "white"}}
                    style ={{backgroundColor:"#6B6E70", marginTop:"3%"}}
                    dropDownContainerStyle = {{backgroundColor:"#6B6E70"}}
                    searchContainerStyle ={{borderColor: "#61892F"}}
                    searchTextInputStyle = {{color:"white",backgroundColor:"#222629"}}
                    placeholderStyle ={{color:"white"}}
                    />
                
            </View>
            
      </SafeAreaView>
    </React.Fragment>
  );
};

export default AddHairdresserThree;
