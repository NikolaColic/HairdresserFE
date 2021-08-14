import 'react-native-gesture-handler';
import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import { Hairdresser } from '../../model/Hairdresser';
import { User } from '../../model/User';
import { Snackbar } from 'react-native-paper';

interface Props  {
  AddFavouriteApi : (hairdresser : Hairdresser) => void;
  DeleteFavouriteApi : (hairdresser : Hairdresser) => void;
  hairdressers : Hairdresser[] | undefined;
  user : User | null;
  hairdresser : Hairdresser | undefined;
  setHairdresser : (hairdresser : Hairdresser | undefined) => void;
  setHairdresserReservation : (hairdresserReservation : Hairdresser | undefined) => void;
}

const HomeFeedList = (props : Props) =>{
  const [active, setActive] = React.useState<boolean> (false); 
  const HandleCreateDetail = (isCreate : boolean, el : Hairdresser) =>{
    if(isCreate){
      if(props.user === null || props.user === undefined){
        setActive(true);
      }else{

        props.setHairdresserReservation(el); 
        navigation.navigate('Create reservation')
      }
    }else{
      if(props.user === null || props.user === undefined){
        setActive(true);
        
      }else{
        props.setHairdresser(el);
        navigation.navigate('Hairdresser one')
      }
    }
  }
  const HandleFavouriteIcon = (el : Hairdresser) =>{
    if(props.user !==  null && props.user !== undefined){
      if(props.user.favouritesHairdresser !==  null && props.user.favouritesHairdresser.length > 0){
        if(props.user.favouritesHairdresser?.find((e)=> e.hairdresser !== null && e.hairdresser.hairdresserId === el.hairdresserId) !== undefined){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  const HandleFavourite = (el : Hairdresser) =>{
    if(props.user !==  null && props.user !== undefined){
      if(props.user?.favouritesHairdresser !==  undefined && props.user?.favouritesHairdresser.length > 0){
        if(props.user.favouritesHairdresser.find((e)=> e.hairdresser.hairdresserId === el.hairdresserId) !== undefined){
          props.DeleteFavouriteApi(el);
        }else{
          props.AddFavouriteApi(el);
        }
      }else{
        props.AddFavouriteApi(el);
      }
    }else{
    }
  }

  const navigation = useNavigation();
    return (
      <View style = {{flex:1}}>
        <Snackbar
            visible = {active}
            onDismiss = {() => setActive(false)}
            style = {{backgroundColor:"#61892F", width:"85%",marginLeft:"7%",borderColor:"#222629",borderRadius:7}}
            duration = {3000}
            action={{
                label: "X",
                onPress: () => {
                  setActive(false)
                },
              }}>
            <Text style = {{color:"white", fontSize:18,textAlign:"center"}}>
                You must Sign in
            </Text>
            </Snackbar>
      {/* <ScrollView
      scrollEnabled
      keyboardDismissMode = "on-drag"
      > */}
                { props.hairdressers?.map((el)=> (
                  <React.Fragment key = {el.hairdresserId}>
            <ListItem.Swipeable
            
            containerStyle = {{backgroundColor:"#222629",borderBottomColor:"#474B4F",borderBottomEndRadius:5}}
            leftContent={
              <Button
                title="Details"
                icon={{ name: 'information-outline', color: 'white',type : "material-community" }}
                buttonStyle={{ minHeight: '100%',backgroundColor: '#6B6E70' }}
                onPress = {() => HandleCreateDetail(false,el)} 

              />
            }
            rightContent={
              <Button
                title="Reservation"
                icon={{ name: 'plus-circle-outline', color: 'white',type : "material-community" }}
                buttonStyle={{ minHeight: '100%', backgroundColor: '#61892F'}}
                onPress = {() => HandleCreateDetail(true,el)} 
              />
            }>
            <Button
            buttonStyle = {{borderColor:"transparent"}}
            onPress ={()=> HandleFavourite(el)}
              icon={
                <Icon name={HandleFavouriteIcon(el) ? "heart" : "heart-outline"}   type ="material-community" color ="#61892F" size = {25} />
              }
              type = "outline"
            />
            {/* <Icon name={HandleFavouriteIcon(el) ? "heart" : "heart-outline"}  onPress ={()=> HandleFavourite(el)} type ="material-community" color ="#61892F" size = {40} /> */}
            <ListItem.Content >
              <ListItem.Title style = {{color:"#86C232",fontFamily: "sans-serif-medium"}} onPress ={()=> HandleFavourite(el)} >{el.name}</ListItem.Title>
              <ListItem.Subtitle style = {{color:"#6B6E70",fontFamily: "sans-serif-medium"}}>{el.adress}</ListItem.Subtitle>
              
            </ListItem.Content>
            <ListItem.Chevron color = "#61892F" size = {50}   onPress = {() => HandleCreateDetail(false,el)}  />
          </ListItem.Swipeable>
                  </React.Fragment>
                )) 
              }
        {/* </ScrollView> */}
            </View>
    );
}

export default HomeFeedList;