import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, InteractionManager} from 'react-native'
import { Chip } from 'react-native-elements';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { User } from '../../../model/User';

interface Props {
  users : User[]; 
  value : string | null;
  setValue : (value : string |null) => void; 
  gender : number;
  setGender : (gender : number) => void; 
  municipality : string; 
  setMunicipality : (municipality : string) => void;
}

const AddHairdresserThree = (props : Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<number>(0);
  const [items, setItems] = React.useState<ItemType[]>([]);

  React.useEffect(()=>{
    var itemTypes : ItemType[] = [];
    props.users.map((el)=>{
        var itemType : ItemType = {label: el.username, value: el.username}
        itemTypes.push(itemType);
    })
    setItems(itemTypes);
  },[])
 
  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
            <View style = {{flex: 0.5,width: "90%", marginLeft:"5%"}}> 
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}>
                    Add owner:
                </Text>
                <DropDownPicker
                    
                    open={open}
                    value={props.value}
                    items={items}
                    searchable
                    loading
                    placeholder = "Search users.."
                    // onChangeSearchText
                    setOpen={setOpen}
                    setValue={props.setValue}
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
                  value = {props.municipality}
                  onChangeText = {(text)=> props.setMunicipality(text)}
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
                  checked = {props.gender == 1}
                  onPress = {()=> props.setGender(1)}
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
                  checked = {props.gender == 2}
                  onPress = {()=> props.setGender(2)}
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
                  checked = {props.gender == 3}
                  onPress = {()=> props.setGender(3)}
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
