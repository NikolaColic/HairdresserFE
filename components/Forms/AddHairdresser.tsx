import "react-native-gesture-handler";
import React from "react";
import { Text, View, TextInput,StyleSheet  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../Header/HeaderComponent";
import Stepper from 'react-native-stepper-ui';
import AddHairdresserOne from "./AddHairdresserTree/AddHairdresserOne";
import AddHairdresserTwo from "./AddHairdresserTree/AddHairdresserTwo";
import AddHairdresserThree from "./AddHairdresserTree/AddHairdresserThree";
import AddHairdresserFour from "./AddHairdresserTree/AddHairdresserFour";
import { Hairdresser } from "../../model/Hairdresser";
import { User } from "../../model/User";
import { Municipality } from "../../model/Municipality";
import { SocialNetwork } from "../../model/SocialNetwork";
import { SocialHairdresser } from "../../model/SocialHairdresser";
import {Snackbar} from 'react-native-paper'


interface Props  {
  AddHairdresser : (hairdresser : Hairdresser) => void;
  users : User[];
  text : string;
  municipalities : Municipality[];
  socialNetworks : SocialNetwork[];
}

const AddHairdresser = (props : Props) => {
    let [step, setStep] = React.useState<number>(0);
  //One
  const [name, setName] = React.useState<string> ("");
  const [taxId, setTaxId] = React.useState<string> ("");
  const [parentId, setParentId] = React.useState<string> ("");
  const [adress, setAdress] = React.useState<string> ("");
  //Two
  const [email, setEmail] = React.useState<string> ("");
  const [number, setNumber] = React.useState<string> ("");
  const [website, setWebsite] = React.useState<string> ("");
  const [instagram, setInstagram] = React.useState<string> ("");
  const [facebook, setFacebook] = React.useState<string> ("");
  //Four
  const [description, setDescription] = React.useState<string> ("");
  const [pricelist, setPricelist] = React.useState<string> ("");

  //Three
  const [value2, setValue2] = React.useState<string | null> (null);
  const [municipality, setMunicipality] = React.useState<string> ("");
  const [gender, setGender] = React.useState<number> (0);
  //Snackbar
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
  const OnSubmit = ()=>{
    const municipalityFind = props.municipalities.find((el)=> el.name.toLowerCase().includes(municipality.toLowerCase()));
    if(municipalityFind === undefined){
      HandleOpenSnackbar("You must entry valid municipality", true);
      return;
    }
    if(value2 ===  null) return;
    const userFind = props.users.find((el)=> el.username.toLowerCase().includes(value2.toLowerCase()));
    if(userFind === undefined){
      HandleOpenSnackbar("You must entry valid user", true);
      return;
    }
    const socialNetworks = SetSocialNetworks();
    const hairdresser = new Hairdresser(0,name,adress,taxId,parentId,number,email,website,description,pricelist,gender,municipalityFind,userFind,[],[],socialNetworks);

    props.AddHairdresser(hairdresser);

  }

  const SetSocialNetworks = ()=>{
    var list : SocialHairdresser[] = [];
    if(facebook !== ""){
      const findSocial = props.socialNetworks.find((el)=> el.name.toLowerCase() === "facebook"); 
      if(findSocial !== undefined){

        list.push(new SocialHairdresser(0,{} as Hairdresser, findSocial, facebook));
      }
    }
    if(instagram !== ""){
      const findSocial = props.socialNetworks.find((el)=> el.name.toLowerCase() === "instagram"); 
      if(findSocial !== undefined){

        list.push(new SocialHairdresser(0,{} as Hairdresser, findSocial, instagram));
      }
    }
    return list;

  }
  const OnNextStep = () =>{
    if(step === 0){
      if(name === "" || adress === "") {
        HandleOpenSnackbar("Empty entry", true);
        return;
      }
      if(taxId.length != 12){
        HandleOpenSnackbar("Tax id must have 12 letters", true);
        return;
      }
      if(parentId.length != 12){
        HandleOpenSnackbar("Parent id must have 12 letters", true);
        return;
      }
    }else if(step == 1){
      if(email === "" || number === "") {
        HandleOpenSnackbar("Empty entry", true);
        return;
      }

      if(!email.trim().endsWith("@gmail.com") && !email.trim().endsWith("@hotmail.com") && !email.trim().endsWith("@outlook.com")
      && !email.trim().endsWith("@fon.bg.ac.rs")){
        HandleOpenSnackbar("You must entry valid email adress",true);
        return;
      }
      if(!facebook.includes("facebook")){
        HandleOpenSnackbar("You must entry valid facebook url",true);
        return;
      }
      if(!instagram.includes("instagram")){
        HandleOpenSnackbar("You must entry valid instagram url",true);
        return;
      }
    }else if(step ==2){
      if(value2 === null){
        HandleOpenSnackbar("You must choose owner",true);
        return;
      }
      if(municipality === ""){
        HandleOpenSnackbar("You must entry municipality",true);
        return;
      }
      if(gender === 0){
        HandleOpenSnackbar("You must choose gender",true);
        return;
      }
    }else{
      if(description === ""){
        HandleOpenSnackbar("You must entry description",true);
        return;
      }
      if(pricelist === ""){
        HandleOpenSnackbar("You must entry pricelist",true);
        return;
      }
    }
    setStep((p) => p + 1)
  }

  let [value, setValue] = React.useState<boolean>(true);
    const content = [<AddHairdresserOne 
    name = {name} setName = {setName} adress = {adress} parentId = {parentId} setAdress = {setAdress} setParentId ={setParentId} setTaxId = {setTaxId}
    taxId ={taxId}
    />, <AddHairdresserTwo 
    email ={email} facebook ={facebook} instagram = {instagram} number = {number} setEmail = {setEmail} setFacebook ={setFacebook} setInstagram = {setInstagram}
    setNumber = {setNumber} setWebsite = {setWebsite} website = {website}
    />,<AddHairdresserThree 
    gender = {gender} municipality = {municipality} setGender = {setGender} setMunicipality = {setMunicipality} setValue = {setValue2} users ={props.users} value ={value2}
    />,<AddHairdresserFour description ={description} setDescription ={setDescription} pricelist = {pricelist} setPricelist ={setPricelist} />]

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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
      <Stepper
          active={step}
          
          content={content}
          onNext={() => OnNextStep()}
          onBack={() => setStep((p) => p - 1)}
          onFinish={()=> OnSubmit()}
          wrapperStyle={styles.wrappper}
          stepStyle={styles.stepStyle}
          showButton={value}
          buttonStyle={step !== 2 ? styles.button : styles.button2}
          buttonTextStyle={{ alignSelf: 'center' }}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    wrappper: {
      color: 'red',
      margin: 5,
    },
    stepStyle: {
      backgroundColor: '#61892F',
      margin: 5,
    },
    button: {
      borderRadius: 4,
      alignSelf: 'center',
      backgroundColor: "#61892F",
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 80,
      marginTop: "1.5%"
    },
    button2: {
      borderRadius: 4,
      alignSelf: 'center',
      backgroundColor: "#61892F",
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 80,
      marginTop: "5%"
    }
  });

export default AddHairdresser;
