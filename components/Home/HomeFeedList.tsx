import 'react-native-gesture-handler';
import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';

const HomeFeedList = () =>{
   const list : number[] = [1,2,3,4,5,6,7,8,8,2,2,2,2,2,2,2,2,2]
  const navigation = useNavigation();
    return (
      <View style = {{flex:1}}>
      <ScrollView
      scrollEnabled
      keyboardDismissMode = "on-drag"
      >
              {
                list.map((el)=> (
                  <React.Fragment>

            <ListItem.Swipeable
            
            containerStyle = {{backgroundColor:"#222629",borderBottomColor:"#474B4F",borderBottomEndRadius:5}}
            leftContent={
              <Button
                title="Details"
                icon={{ name: 'information-outline', color: 'white',type : "material-community" }}
                buttonStyle={{ minHeight: '100%',backgroundColor: '#6B6E70' }}
                onPress = {() => navigation.navigate('Hairdresser one')} 

              />
            }
            rightContent={
              <Button
                title="Reservation"
                icon={{ name: 'plus-circle-outline', color: 'white',type : "material-community" }}
                buttonStyle={{ minHeight: '100%', backgroundColor: '#61892F'}}
                onPress = {() => navigation.navigate('Create reservation')} 
              />
            }>
            <Icon name="heart-outline"  type ="material-community" color ="#61892F" size = {25} />
            <ListItem.Content >
              <ListItem.Title style = {{color:"#86C232",fontFamily: "sans-serif-medium"}}>Hello Swiper</ListItem.Title>
              <ListItem.Subtitle style = {{color:"#6B6E70",fontFamily: "sans-serif-medium"}}>Naselje Mose Pijade 32</ListItem.Subtitle>
              
            </ListItem.Content>
            <ListItem.Chevron color = "#61892F" size = {30}  onPress = {() => navigation.navigate('Hairdresser one')}  />
          </ListItem.Swipeable>
                  </React.Fragment>
                ))
              }
        </ScrollView>
            </View>
    );
}

export default HomeFeedList;