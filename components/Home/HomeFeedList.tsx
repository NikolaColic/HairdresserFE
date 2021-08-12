import 'react-native-gesture-handler';
import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import { Hairdresser } from '../../model/Hairdresser';
import { User } from '../../model/User';

interface Props  {
  AddFavouriteApi : (hairdresser : Hairdresser) => void;
  DeleteFavouriteApi : (hairdresser : Hairdresser) => void;
  hairdressers : Hairdresser[] | undefined;
  user : User | null;
}

const HomeFeedList = (props : Props) =>{
  
  const HandleCreateDetail = (isCreate : boolean) =>{
    if(isCreate){
      if(props.user === null){
        //snackbar da mora login
      }else{
        navigation.navigate('Create reservation')
      }
    }else{
      if(props.user === null){
        //snackbar da mora login
      }else{
        navigation.navigate('Hairdresser one')
      }
    }
  }
  const HandleFavouriteIcon = (el : Hairdresser) =>{
    if(props.user !==  null){
      if(props.user.favouritesHairdresser !==  null && props.user.favouritesHairdresser.length > 0){
        if(props.user.favouritesHairdresser.find((e)=> e.hairdresser.hairdresserId === el.hairdresserId) !== undefined){
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
    if(props.user !==  null){
      if(props.user.favouritesHairdresser !==  null && props.user.favouritesHairdresser.length > 0){
        if(props.user.favouritesHairdresser.find((e)=> e.hairdresser.hairdresserId === el.hairdresserId) !== undefined){
          props.DeleteFavouriteApi(el);
        }else{
          props.AddFavouriteApi(el);
        }
      }else{
        props.AddFavouriteApi(el);
      }
    }
  }

  const navigation = useNavigation();
    return (
      <View style = {{flex:1}}>
      <ScrollView
      scrollEnabled
      keyboardDismissMode = "on-drag"
      >
             {console.log("Nikola " + props.hairdressers
             )}
                { props.hairdressers?.map((el)=> (
                  <React.Fragment key = {el.hairdresserId}>
            <ListItem.Swipeable
            
            containerStyle = {{backgroundColor:"#222629",borderBottomColor:"#474B4F",borderBottomEndRadius:5}}
            leftContent={
              <Button
                title="Details"
                icon={{ name: 'information-outline', color: 'white',type : "material-community" }}
                buttonStyle={{ minHeight: '100%',backgroundColor: '#6B6E70' }}
                onPress = {() => HandleCreateDetail(false)} 

              />
            }
            rightContent={
              <Button
                title="Reservation"
                icon={{ name: 'plus-circle-outline', color: 'white',type : "material-community" }}
                buttonStyle={{ minHeight: '100%', backgroundColor: '#61892F'}}
                onPress = {() => HandleCreateDetail(true)} 
              />
            }>
            <Icon name={HandleFavouriteIcon(el) ? "heart" : "heart-outline"} onPress ={()=> HandleFavourite(el)} type ="material-community" color ="#61892F" size = {25} />
            <ListItem.Content >
              <ListItem.Title style = {{color:"#86C232",fontFamily: "sans-serif-medium"}}>{el.name}</ListItem.Title>
              <ListItem.Subtitle style = {{color:"#6B6E70",fontFamily: "sans-serif-medium"}}>{el.adress}</ListItem.Subtitle>
              
            </ListItem.Content>
            <ListItem.Chevron color = "#61892F" size = {30}  onPress = {() => HandleCreateDetail(false)}  />
          </ListItem.Swipeable>
                  </React.Fragment>
                )) 
              }
        </ScrollView>
            </View>
    );
}

export default HomeFeedList;