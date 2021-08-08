import 'react-native-gesture-handler';
import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import { Text, View } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HeaderComponent from './components/Header/HeaderComponent';
import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';
import HomeFeed from './components/Home/HomeFeed';
import ReservationList from './components/Home/ReservationList';
import FavouriteList from './components/Home/FavouriteList';
import UpdateAccount from './components/Forms/UpdateAccount';
import MyHairdresser from './components/Home/MyHairdresser';
import AddHairdresser from './components/Forms/AddHairdresser';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import AddReservation from './components/Forms/AddReservation';
import ChangePassword from './components/Forms/UpdateAccountTree/ChangePassword';
import HairdresserOne from './components/StoryPage/HairdresserOne';
const Drawer = createDrawerNavigator();

const  App = () => {
  const isLoadingComplete = useCachedResources();
  const [number, setNumber] = React.useState<number> (1);
  if (!isLoadingComplete) {
    return null;   
   
  } else {
    return (
      <NavigationContainer> 
         {
           number == 1 ? (
             <Drawer.Navigator initialRouteName="HomeFeed" 
             drawerType = "front"
             drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
             ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
             ,labelStyle: {fontSize:20}}}
             drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
                <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={HomeFeed}  />  
                <Drawer.Screen name="Sign In" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="login-variant" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={HairdresserOne}  />
                <Drawer.Screen name="Sign Up" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="account-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={AddReservation} />
                <Drawer.Screen name="Change password" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={ChangePassword} />

              </Drawer.Navigator>
           ) : number == 2 ? (
          <Drawer.Navigator initialRouteName="HomeFeed" 
            drawerType = "front"
            drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
            ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
            ,labelStyle: {fontSize:20}}}
            drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
              <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={HomeFeed} /> 
              <Drawer.Screen name="My reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={ReservationList} />
              <Drawer.Screen name="My favourites" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={FavouriteList} />
              <Drawer.Screen name="Edit profile" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={UpdateAccount} />
            </Drawer.Navigator>
           ) : number == 3 ? (
            <Drawer.Navigator initialRouteName="HomeFeed" 
            drawerType = "front"
            drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
            ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
            ,labelStyle: {fontSize:20}}}
            drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
            {/* dodati i notifikacije */}
            <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={HomeFeed} /> 
            <Drawer.Screen name="My reservation" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={ReservationList} />
            <Drawer.Screen name="My favourites" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={FavouriteList} />
            <Drawer.Screen name="My hairdressers" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="hair-dryer-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={MyHairdresser} />
            <Drawer.Screen name="Edit profile" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={UpdateAccount} />
          </Drawer.Navigator>
           ) : (
          <Drawer.Navigator initialRouteName="HomeFeed" 
          drawerType = "front"
          drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
          ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
          ,labelStyle: {fontSize:20}}}
          drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
            <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={HomeFeed} /> 
            <Drawer.Screen name="My reservation" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={ReservationList} />
            <Drawer.Screen name="My favourites" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={FavouriteList} />
            <Drawer.Screen name="My hairdressers" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="hair-dryer-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={MyHairdresser} />
            <Drawer.Screen name="Add hairdresser" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="plus-circle-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={AddHairdresser} />
            <Drawer.Screen name="Edit profile" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={UpdateAccount} />
          </Drawer.Navigator>
           )
         }
      </NavigationContainer>
    );
  }
}

export default App;
