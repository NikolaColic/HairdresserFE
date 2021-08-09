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

const AddHairdresser = () => {
    let [step, setStep] = React.useState<number>(0);

  let [value, setValue] = React.useState<boolean>(true);
    const content = [<AddHairdresserOne />, <AddHairdresserTwo />,<AddHairdresserThree />,<AddHairdresserFour />]

  return (
    <React.Fragment>
      <HeaderComponent  />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
      <Stepper
          active={step}
          
          content={content}
          onNext={() => setStep((p) => p + 1)}
          onBack={() => setStep((p) => p - 1)}
          onFinish={()=> console.log("ajmo mi")}
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
