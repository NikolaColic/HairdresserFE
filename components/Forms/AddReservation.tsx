import 'react-native-gesture-handler';
import React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import HeaderComponent from '../Header/HeaderComponent';
import {View, Text} from 'react-native'
import { Chip } from 'react-native-elements';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button} from 'react-native-paper';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Reservation } from '../../model/Reservation';
import { Hairdresser } from '../../model/Hairdresser';
import { User } from '../../model/User';
import {Snackbar} from 'react-native-paper';

interface Props  {
    AddReservationApi : (reservation : Reservation) => void;
    hairdressers : Hairdresser[] | undefined;
    text : string;
}


const AddReservation = (props : Props) => {
  const [dateVisible, setDateVisible] = React.useState<boolean> (false);
  const [dateTitle, setDateTitle] = React.useState<string> ("Add datetime");
  const [date, setDate] = React.useState<Date | null> (null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState(null);
  const [description, setDescription] = React.useState<string>("");
  const [note, setNote] = React.useState<string>("");
  const [items, setItems] = React.useState<ItemType[]>([]);
  const [resText, setResText] = React.useState<string> ("");
  const [text,setText] = React.useState<string | null> (null);
  const [error, setError] = React.useState<boolean> (false);
 

  const HandleDismissSnackbar = ()=>{
    setText(null);
    setError(true);
  }
  const HandleOpenSnackbar = (textSnackbar : string, signal : boolean)=>{
    setText(textSnackbar);
    setError(signal);
  }

  const AddReservationApi = () =>{
      const hairdresser = props.hairdressers?.find((el)=> el.name === value);
      if(date === null){
          return;
      }
      if(hairdresser !== undefined ){
          var res : Reservation = new Reservation(0, hairdresser, {} as User, date, description, note, 1);
          props.AddReservationApi(res);
      }
  }
  React.useEffect(()=>{
    var itemTypes : ItemType[] = [];
    props.hairdressers?.map((el)=>{
        var itemType : ItemType = {label: el.name, value: el.name}
        itemTypes.push(itemType);
    })
    setItems(itemTypes);
  },[])

    const handleConfirm = (date : Date) =>{
        setDateVisible(false);
        if(value === null){
            HandleOpenSnackbar('You must first choose hairdresser',false);
            
            return;
        }
        if(new Date() > date){
            HandleOpenSnackbar('Date must be greather than now',true);
            return;
        }
        if(date.getHours() < 8 || date.getHours() > 20){
            HandleOpenSnackbar('Reservation must be between 8h and 20h',true);
            return;
        }
        const haird = props.hairdressers?.find((el)=>  el.name === value);
        if(haird !== undefined){
            
            const res = haird.reservations?.find((el)=> el.time < date && date < new Date(el.time.setMinutes(el.time.getMinutes() + 20)));
            
            if(res !== undefined){
                HandleOpenSnackbar('Reservation at that datetime exist!',true);
                return;
            }
            try{
                const resExist = haird.reservations?.filter((el)=> el.time.getDate === date.getDate && el.time.getMonth === date.getMonth);
            
                var resText2 = "";
                alert( resExist.length === 0);
                if(resExist !== undefined && resExist.length > 0){
                    resExist.map((el)=>{
                        resText2 += el.time.getHours() + ":" + el.time.getMinutes() + " - " + el.time.getHours() + ":" + el.time.getMinutes() + 20 +", ";
                    });
                    
                }
                alert(resText2);
                setDate(date);
                setResText(resText2);
                setDateTitle(date.toLocaleDateString() + " " +date.toLocaleTimeString()); 
            }catch(e){
                alert("ERROR" +e);
            }
        }

    }
    return (
        <React.Fragment>
            <Snackbar
            visible = {text != null}
            onDismiss = {() => HandleDismissSnackbar()}
            style = {error ? {backgroundColor:"#C3073F", width:"85%",marginLeft:"7%",borderColor:"#222629",borderRadius:7}
          : {backgroundColor:"#61892F", width:"85%",marginLeft:"7%",borderColor:"#222629",borderRadius:7}
          }
            duration = {3000}
            action={{
                label: "X",
                onPress: () => {
                  HandleDismissSnackbar()
                },
              }}>
            <Text style = {{color:"white", fontSize:18,textAlign:"center"}}>
                {text}

            </Text>
            </Snackbar>
            <HeaderComponent text = {props.text} />
            <SafeAreaView style = {{flex: 1, backgroundColor: "#222629",flexDirection:"column"}}> 
            <View style = {{flex: 0.2,width: "90%", marginLeft:"5%"}}> 
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}>
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
                <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}>
                    Choose date and time:
                </Text>
                <Chip title={dateTitle} 
                containerStyle = {{marginTop:"3%",width:"60%"}}
                titleStyle = {{fontFamily:"sans-serif-medium"}}
                buttonStyle ={{backgroundColor:"#61892F"}}
                onPress ={()=> setDateVisible(true)}/>
                
                        <DateTimePickerModal
                    isVisible={dateVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={()=> setDateVisible(false)}
                        />
            </View>
            <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}>
               {resText}
            </Text>
            <View style = {{flex: 0.4,width: "90%", marginLeft:"5%"}}>
            <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",fontFamily:"sans-serif-medium"}}>
                    Add informations:
            </Text>
            <Input
                placeholder='Enter description..' 
                placeholderTextColor = "#474B4F"
                label = "Description"
                containerStyle = {{marginTop:"3%"}}
                labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
                inputContainerStyle = {{borderColor: "#474B4F"}}
                value = {description}
                onChangeText ={(description)=> setDescription(description)}
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
                labelStyle = {{color:"#61892F",fontFamily:"sans-serif-medium"}}
                containerStyle = {{marginTop:"3%"}}
                value = {note}
                onChangeText ={(note)=> setNote(note)}
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
                containerStyle = {{width:"85%", marginLeft:"6%"}}
                buttonStyle = {{height:"45%",backgroundColor:"#61892F"}}
                titleStyle = {{fontSize:20, letterSpacing:3}}
                onPress = {()=> AddReservationApi()}
            />
            </View>

         </SafeAreaView>
        </React.Fragment>
    )
}

export default AddReservation;