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


interface Props  {
  AddHairdresser : (hairdresser : Hairdresser) => void;
  users : User[];
  text : string;
  municipalities : Municipality[];
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
  
  const OnSubmit = ()=>{
    //opstina
    //socialnetworks
    //validacija 

  }
  const OnNextStep = () =>{
    //ovde se validira sada za taj step u zavisnosti od numbera (i ako je okej moze preci na sledeci);
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
