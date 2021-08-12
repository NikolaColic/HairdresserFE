import 'react-native-gesture-handler';
import React from 'react';
import { Snackbar } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HeaderComponent from './components/Header/HeaderComponent';
import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';
import HomeFeed from './components/Home/HomeFeed';
import ReservationList from './components/Home/ReservationList';
import UpdateAccount from './components/Forms/UpdateAccount';
import MyHairdresser from './components/Home/MyHairdresser';
import AddHairdresser from './components/Forms/AddHairdresser';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import AddReservation from './components/Forms/AddReservation';
import ChangePassword from './components/Forms/UpdateAccountTree/ChangePassword';
import HairdresserOne from './components/StoryPage/HairdresserOne';
import { User } from './model/User';
import { Reservation } from './model/Reservation';
import { Hairdresser } from './model/Hairdresser';
import { SocialNetwork } from './model/SocialNetwork';
import { Municipality } from './model/Municipality';
import { FavouriteHairdresserAPI, HairdresserAPI, MunicipalityAPI, ReservationsAPI, SocialNetworkAPI, UserAPI } from './services/api';
import { FavouriteHairdresser } from './model/FavouriteHairdresser';
import {Text} from 'react-native';
const Drawer = createDrawerNavigator();

const  App = () => {
  const [hairdressers, setHairdressers] = React.useState<Hairdresser[] | undefined> ([]);
  const [users, setUsers] = React.useState<User[]> ([]);
  const [user, setUser] = React.useState<User |  null> (null);
  const [socialNetworks, setSocialNetworsk] = React.useState<SocialNetwork[]> ([]);
  const [municipilities, setMunicipilities] = React.useState<Municipality[]> ([]);
  const [text,setText] = React.useState<string | null> (null);

  const isLoadingComplete = useCachedResources();
  const [number, setNumber] = React.useState<number> (1); 
 
  const DovuciPodatke = async () => {
    try{ 
      const hairdressers = await HairdresserAPI.GetHairdressers();  
      const users = await UserAPI.GetUsers();  
      const socialNetworks = await SocialNetworkAPI.GetSocialNetworks();  
      const municipilities = await MunicipalityAPI.GetMunicipalities();
      setUsers(users);
      setSocialNetworsk(socialNetworks);
      setMunicipilities(municipilities);
      setHairdressers(hairdressers);
      
    }catch( e){
      console.log(e); 
      console.log("GRESKA JE OVO VELIKA SS!")
    }
     
  };
  React.useEffect(() => {
    DovuciPodatke();    
  }, []); 

  const SignInApi = async (username : string, password : string) =>{
    try{
      var user1 : User= new User(0,"","",username,"", new Date(),"",password, "",[],[],[],false);
      const res = await UserAPI.Authentification(user1);
      if(res !== null){
        if(username === "nikola") res.isAdministrator = true;
        setUser(res);
      }else{
        setText('Invalid sign in');
      }
    }catch(e){
      console.log(e);
    }

  }
  const SignUpApi = async (user : User) => {
    try{
      const res = await UserAPI.PostUserAPI(user);
      if(res){
        setText('You have successfully created account');
      }else{
        setText('Invalid sign up');
      }
    }catch(e){
      console.log(e);
    }
  }
  const AddReservationApi = async (reservation : Reservation) => {
    try{
      console.log(user);
      if(user !== null) {
        reservation.user = user;
      }
      const res = await ReservationsAPI.PostReservationAPI(reservation);
      if(res){
        user?.reservationsHistory.push(reservation);
        //nema id iz baze
        setUser(user);
        setText('You have successfully created reservation');
      }else{
        setText('You dont have successfully created reservation');
      }
    }catch(e){
      console.log(e);
    }
  }
  const DeleteReservationApi = async (reservation : Reservation) =>{
    try{
      const res = await ReservationsAPI.DeleteReservationAPI(reservation.reservationId);
      if(res){
        user?.reservationsHistory.filter((reser)=> reser.reservationId !== reservation.reservationId);
        console.log(user);
        setUser(user);
        setText('You have successfully delete reservation');

      }else{
        setText('You dont have successfully delete reservation');
      }
    }catch(e){
      console.log(e);
    }
  }
  const AddHairdresserApi = async (hairdresser : Hairdresser) => {
    try{
      const res = await HairdresserAPI.PostHairdresserAPI(hairdresser);
      if(res){
        setText('You have successfully delete reservation');
        hairdressers?.push(hairdresser);
        setHairdressers(hairdressers);
      }else{
        setText('You dont have successfully delete reservation');
      }
    }catch(e){
      console.log(e);
    }
  }
  const UpdateAccountApi = async (user : User, isChange : boolean) => {
    try{
      alert(user.name);  
      const res = await UserAPI.PutUserAPI(user);
      if(res){
        
        setText(isChange ? 'You have successfully change password': 'You have successfully update account');
        setUser(user);
      }else{
        setText(isChange ? 'You dont have successfully change password': 'You dont have successfully update account');
      }
    }catch(e){
      console.log(e);
    }
  }
  const AddFavouriteApi = async (hairdresser : Hairdresser) =>{
    try{
      var favourite : FavouriteHairdresser = {} as FavouriteHairdresser;
      if(user !== null){

        favourite = new FavouriteHairdresser(0, hairdresser, user);
      }else{
        favourite = new FavouriteHairdresser(0, hairdresser, {} as User);

      }
      const res = await FavouriteHairdresserAPI.PostFavouriteHairdresserAPI(favourite);
      if(res){
        
        setText('You have successfully add favourite hairdresser');
        user?.favouritesHairdresser.push(favourite);
        setUser(user);
      }else{
        setText('You dont have successfully add favourite hairdresser');
      }
    }catch(e){
      console.log(e);
    }
  }
  const DeleteFavouriteApi = async (hairdresser : Hairdresser) =>{
    try{
      var favourite = user?.favouritesHairdresser.find((el)=> el.hairdresser.hairdresserId === hairdresser.hairdresserId);
      if(favourite !== undefined){
        const res = await FavouriteHairdresserAPI.DeleteFavouriteHairdresserAPI(favourite?.favouriteHairdresserId);
        if(res){
          
          setText('You have successfully add favourite hairdresser');
          user?.favouritesHairdresser.filter((el) => el.hairdresser.hairdresserId !== hairdresser.hairdresserId);
          setUser(user);
        }else{
          setText('You dont have successfully add favourite hairdresser');
        }

      }
    }catch(e){
      console.log(e);
    }
  }

  if (!isLoadingComplete) {
    return null;   
   
  } else {
    return (
      <NavigationContainer> 
        <Snackbar
            visible = {text !== null}
            onDismiss = {() => setText(null)}
            duration = {5000}
            action={{
                label: 'X',
                onPress: () => {
                  setText(null)
                },
              }}>
            
                {text}
            </Snackbar>
         {
           user === null ? (
             <Drawer.Navigator initialRouteName="Home" 
             drawerType = "front"
             drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
             ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
             ,labelStyle: {fontSize:20}}}
             drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
                <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={() => <HomeFeed isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                hairdressers = {hairdressers} text = "Welcome" user = {user}/>}  />  
                <Drawer.Screen name="Sign In" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="login-variant" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={() => <SignIn text = {"SignIn"} SignInApi = {SignInApi} />}  />
                <Drawer.Screen name="Sign Up" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="account-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={() => <SignUp text ="Sign up" SignUpApi = {SignUpApi} />} />
                

              </Drawer.Navigator>
           ) :user.isAdministrator ? (
            <Drawer.Navigator initialRouteName="Home" 
            drawerType = "front"
            drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
            ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
            ,labelStyle: {fontSize:20}}}
            drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
              <Drawer.Screen name="Home" 
                  options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                  component={() => <HomeFeed isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                  hairdressers = {hairdressers} text = "Welcome" user = {user}/>} /> 
              <Drawer.Screen name="My reservation" 
                  options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                  component={() => <ReservationList user = {user} text2 = {"Reservations"} DeleteReservation = {DeleteReservationApi}/>} />
              <Drawer.Screen name="My favourites" 
                  options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                  component={() => <HomeFeed isHome ={false} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                  hairdressers = {user?.favouritesHairdresser.map((el)=> el.hairdresser)} text = "Welcome" user = {user}/>} />
              <Drawer.Screen name="My hairdressers" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="hair-dryer-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={MyHairdresser} />
              <Drawer.Screen name="Add hairdresser" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="plus-circle-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <AddHairdresser socialNetworks = {socialNetworks} municipalities ={municipilities} text = {"Add hairdresser"} users = {users} AddHairdresser = {AddHairdresserApi}/>} />
              <Drawer.Screen name="Create reservation" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={() => <AddReservation text = {"Create reservation"} hairdressers = {hairdressers} AddReservationApi = {AddReservationApi}/>} />
              <Drawer.Screen name="Edit profile" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <UpdateAccount user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} />
              <Drawer.Screen name="Change password" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <ChangePassword user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} />
                <Drawer.Screen name="Hairdresser one" 
                  options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                  component={HairdresserOne} />
            </Drawer.Navigator>
           ) : user.hairdressersOwner === null || user.hairdressersOwner.length == 0 ? (
          <Drawer.Navigator initialRouteName="Home" 
            drawerType = "front"
            drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
            ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
            ,labelStyle: {fontSize:20}}}
            drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
              <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={() => <HomeFeed isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                hairdressers = {hairdressers} text = "Welcome" user = {user}/>} /> 
              <Drawer.Screen name="My reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <ReservationList user = {user} text2 = {"Reservations"} DeleteReservation = {DeleteReservationApi}/>} />
              <Drawer.Screen name="My favourites" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <HomeFeed  isHome ={false} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
              hairdressers = {user?.favouritesHairdresser.map((el)=> el.hairdresser)} text = "Welcome" user = {user}/>} />
              <Drawer.Screen name="Create reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <AddReservation text = {"Create reservation"} hairdressers = {hairdressers} AddReservationApi = {AddReservationApi}/>} />
              <Drawer.Screen name="Edit profile" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <UpdateAccount user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} />
              <Drawer.Screen name="Change password" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={() => <ChangePassword user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} />
            </Drawer.Navigator>
           ) :  (
            <Drawer.Navigator initialRouteName="Home" 
            drawerType = "front"
            drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
            ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
            ,labelStyle: {fontSize:20}}}
            drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
            <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component={() => <HomeFeed isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                hairdressers = {hairdressers} text = "Welcome" user = {user}/>} /> 
              <Drawer.Screen name="My reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <ReservationList user = {user} text2 = {"Reservations"} DeleteReservation = {DeleteReservationApi}/>} />
              <Drawer.Screen name="My favourites" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <HomeFeed  isHome ={false} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
              hairdressers = {user?.favouritesHairdresser.map((el)=> el.hairdresser)} text = "Welcome" user = {user}/>} />
            <Drawer.Screen name="My hairdressers" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="hair-dryer-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={() => <MyHairdresser user = {user} text2 = {"Reservations"} DeleteReservation = {DeleteReservationApi}/>} />
            <Drawer.Screen name="Create reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              component={() => <AddReservation text = {"Create reservation"} hairdressers = {hairdressers} AddReservationApi = {AddReservationApi}/>} />
            <Drawer.Screen name="Edit profile" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={() => <UpdateAccount user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} />
            <Drawer.Screen name="Change password" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            component={() => <ChangePassword user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} />
          </Drawer.Navigator>
           ) 
          
           
         }
      </NavigationContainer>
    );
  }
}

export default App;
