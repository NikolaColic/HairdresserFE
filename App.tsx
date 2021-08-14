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
import {Text, Vibration} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const Drawer = createDrawerNavigator();

const  App = () => {
  const [hairdressers, setHairdressers] = React.useState<Hairdresser[] | undefined> ([]);
  const [users, setUsers] = React.useState<User[]> ([]);
  const [user, setUser] = React.useState<User |  null> (null);
  const [socialNetworks, setSocialNetworsk] = React.useState<SocialNetwork[]> ([]);
  const [municipilities, setMunicipilities] = React.useState<Municipality[]> ([]);
  const [hairdresserOne, setHairdresserOne] = React.useState<Hairdresser | undefined> (undefined);
  const [text,setText] = React.useState<string | null> (null);
  const [error, setError] = React.useState<boolean> (false);
  const isLoadingComplete = useCachedResources();
  const [number, setNumber] = React.useState<number> (1); 
  const [hairdresserReservation, setHairdresserReservation] = React.useState<Hairdresser | undefined> (undefined);

  const HandleDismissSnackbar = ()=>{
    setText(null);
    setError(true);
  }
  const HandleOpenSnackbar = (textSnackbar : string, signal : boolean)=>{
    setText(textSnackbar);
    setError(signal);
  }
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
      const res : any = await UserAPI.Authentification(user1);
      if(res !==  null){
        if(username === "nikola") res.isAdministrator = true;
        Vibration.vibrate();
        setUser(res);
      }else{
        HandleOpenSnackbar("Invalid sign in", true);
      }
    }catch(e){
      console.log(e);
    }

  }
  const SignUpApi = async (user : User) => {
    try{
      if(user.name === "" || user.number === "" || user.email === ""){
        HandleOpenSnackbar("Empty entry!",true);
        return;
      }
      if(!user.email.trim().endsWith("@gmail.com") && !user.email.trim().endsWith("@hotmail.com") && !user.email.trim().endsWith("@outlook.com")
      && !user.email.trim().endsWith("@fon.bg.ac.rs")){
        HandleOpenSnackbar("You must entry valid email adress",true);
        return;
      }
      if(user.username.length < 5){
        HandleOpenSnackbar("Username must have at least 5 charachters",true);
        return;
      }
      if(user.password.length < 5){
        HandleOpenSnackbar("Pasword must have at least 5 charachters",true);
        return;
      }
      if(users.find((el)=> el.username === user.username) !== undefined){
        HandleOpenSnackbar("User with same name exist. Please try again",true);
        return;
      }
      if(users.find((el)=> el.email === user.email) !== undefined){
        HandleOpenSnackbar("User with same email exist. Please try again",true);
        return;
      }

      const res = await UserAPI.PostUserAPI(user);
      if(res){
        HandleOpenSnackbar("You have successfully created account", false);
        Vibration.vibrate();
      }else{
        HandleOpenSnackbar("Invalid sign up", true);
      }
    }catch(e){
      console.log(e);
    }
  }
  const AddReservationApi = async (reservation : Reservation) => {
    try{
      if(user !== null) {
        reservation.user = user;
      }
      if(reservation.description === ""){
        HandleOpenSnackbar("You must entry description", true);
        return;
      }
      if(reservation.hairdresser?.reservations.filter((el)=> reservation.time > el.time && reservation.time < new Date(el.time.setMinutes(el.time.getMinutes() + 20))).length > 0){
        HandleOpenSnackbar("Reservation at that time exist", true);
        return;
      }
      reservation.time = new Date(reservation.time.setHours(reservation.time.getHours() +2));
      const res = await ReservationsAPI.PostReservationAPI(reservation);
      if(res){
        const hairdressers = await HairdresserAPI.GetHairdressers();
        setHairdressers(hairdressers);
        if(user !== null){
          const user2 = await UserAPI.Authentification(user);
          if(user2.username === "nikola") user2.isAdministrator = true;
          setUser(user2);
        }
        Vibration.vibrate();
        HandleOpenSnackbar("You have successfully created reservation", false);
      }else{
        HandleOpenSnackbar("You dont have successfully created reservation", true);
      }
    }catch(e){
      console.log(e);
    }
  }
  const DeleteReservationApi = async (reservation : Reservation) =>{
    try{
      const res = await ReservationsAPI.DeleteReservationAPI(reservation.reservationId);
      if(res){
        if(user !== null){
          const user2 = await UserAPI.Authentification(user);
          if(user2.username === "nikola") user2.isAdministrator = true;
          setUser(user2);
        }
       
        HandleOpenSnackbar("You have successfully delete reservation", false);

      }else{
        HandleOpenSnackbar("You dont have successfully delete reservation", true);

      }
    }catch(e){
      console.log(e);
    }
  }
  const AddHairdresserApi = async (hairdresser : Hairdresser) => {
    try{
      if(hairdressers?.find((el)=> el.name.toLowerCase() === hairdresser.name && el.adress.toLowerCase() === hairdresser.adress )){
        HandleOpenSnackbar("Hairdresser with same name exist", true);
        return;
      }
      const res = await HairdresserAPI.PostHairdresserAPI(hairdresser);
      if(res){
        HandleOpenSnackbar("You have successfully create hairdresser", false);
        const hairdressers = await HairdresserAPI.GetHairdressers();
        Vibration.vibrate();
        setHairdressers(hairdressers);
      }else{
        HandleOpenSnackbar("You dont have successfully create hairdresser", true);

      }
    }catch(e){
      console.log(e);
    }
  }
  const UpdateAccountApi = async (user : User, isChange : boolean) => {
    try{
      if(!isChange){
        if(user.name === "" || user.number === "" || user.email === ""){
          HandleOpenSnackbar("Empty entry!",true);
          return;
        }
        if(user.username.length < 5){
          HandleOpenSnackbar("Username must have at least 5 charachters",true);
          return;
        }
        if(user.password.length < 5){
          HandleOpenSnackbar("Pasword must have at least 5 charachters",true);
          return;
        }
        if(users.find((el)=> el.username === user.username && el.userId != user.userId) !== undefined){
          HandleOpenSnackbar("User with same name exist. Please try again",true);
          return;
        }
        if(users.find((el)=> el.email === user.email  && el.userId != user.userId) !== undefined){
          HandleOpenSnackbar("User with same email exist. Please try again",true);
          return;
        }
  
      }
      const res = await UserAPI.PutUserAPI(user);
      if(res){
        HandleOpenSnackbar(isChange ? 'You have successfully change password': 'You have successfully update account', false);
        
        setUser(user);
      }else{
        HandleOpenSnackbar(isChange ? 'You dont have successfully change password': 'You dont have successfully update account', true);
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
        HandleOpenSnackbar('You have successfully add favourite hairdresser', false);
        if(user !== null){
          const user2 = await UserAPI.Authentification(user);
          if(user2.username === "nikola") user2.isAdministrator = true;
          setUser(user2);
          Vibration.vibrate();
        }
       
      }else{
        HandleOpenSnackbar('You dont have successfully add favourite hairdresser', true);
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
          HandleOpenSnackbar('You have successfully delete favourite hairdresser', false);
          if(user !== null){
            const user2 = await UserAPI.Authentification(user);
            if(user2.username === "nikola") user2.isAdministrator = true;
            setUser(user2);
            Vibration.vibrate();
          }
          // user?.favouritesHairdresser.filter((el)=> el.hairdresser.hairdresserId !== hairdresser.hairdresserId);
          //   setUser(user);
           
        }else{
          HandleOpenSnackbar('You dont have successfully delete favourite hairdresser', true);
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
            visible = {text != null}
            onDismiss = {() => HandleDismissSnackbar()}
            
            style = {error ? {backgroundColor:"#C3073F", width:"85%",marginLeft:"7%",borderColor:"#222629",borderRadius:7}
          : {backgroundColor:"#61892F", width:"85%",marginLeft:"7%",borderColor:"#222629",borderRadius:7, alignItems:"center",justifyContent:"center"}
          }
            duration = {3000}
            action={{
                label: "X",
                onPress: () => {
                  HandleDismissSnackbar()
                },
              }}>
            <Text style = {{color:"white", fontSize:18,textAlign:"center", alignContent:"center"}}>
                {text}

            </Text>
            </Snackbar>
         {
           user === null  || user === undefined ? (
             <Drawer.Navigator initialRouteName="Home" 
             drawerType = "front"
             drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
             ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
             ,labelStyle: {fontSize:20}}}
             drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
                <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                component = {() => (
                <HomeFeed setHairdresserReservation ={setHairdresserReservation}  hairdresser ={hairdresserOne} setHairdresser ={setHairdresserOne} isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                hairdressers = {hairdressers} text = "Welcome" user = {user}/>
                )}  />
                <Drawer.Screen name="Sign In" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="login-variant" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}>
              {() => (
                   <SignIn text = {"SignIn"} SignInApi = {SignInApi} />
                   )} 
                   </Drawer.Screen>
                <Drawer.Screen name="Sign Up" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="account-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}} >
                {() => ( 
                <SignUp text ="Sign up" SignUpApi = {SignUpApi}
                 />)} 
                 </Drawer.Screen>
                

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
                  component = {() => <HomeFeed setHairdresserReservation ={setHairdresserReservation}  hairdresser ={hairdresserOne} setHairdresser ={setHairdresserOne} isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                    hairdressers = {hairdressers} text = "Welcome" user = {user}/>} />
              <Drawer.Screen name="My reservation" 
                  options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                  >
                  {() => <ReservationList user = {user} text2 = {"Reservations"} DeleteReservation = {DeleteReservationApi}/>}

                  </Drawer.Screen>
             
                  <Drawer.Screen name="My hairdressers" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="hair-dryer-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}>
              {() => <MyHairdresser hairdressers = {hairdressers} user = {user} text2 = {"My hairdressers"} DeleteReservation = {DeleteReservationApi}/>}
              </Drawer.Screen>
              <Drawer.Screen name="Add hairdresser" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="plus-circle-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <AddHairdresser socialNetworks = {socialNetworks} municipalities ={municipilities} text = {"Add hairdresser"} users = {users} AddHairdresser = {AddHairdresserApi}/>} 
              </Drawer.Screen>
              <Drawer.Screen name="Create reservation" 
                
                options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                >
                {() => <AddReservation hairdresserReservation ={hairdresserReservation} setHairdresserReservation ={setHairdresserReservation}  text = {"Create reservation"} hairdressers = {hairdressers} AddReservationApi = {AddReservationApi}/>}

                </Drawer.Screen>
              <Drawer.Screen name="Edit profile" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <UpdateAccount user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} 
              </Drawer.Screen>
              <Drawer.Screen name="Change password" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <ChangePassword user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} 

              </Drawer.Screen>
              <Drawer.Screen name="Hairdresser one" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="chair-rolling" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                >

                {(props : any) => <HairdresserOne {...props} setHairdresserReservation ={setHairdresserReservation} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} hairdresser = {hairdresserOne} user ={user} text ="Hairdresser detail" />} 
                </Drawer.Screen>
            </Drawer.Navigator>
           ) : user !== undefined && user !== null && (user.hairdressersOwner === null || user.hairdressersOwner?.length == 0) ? (
          <Drawer.Navigator initialRouteName="Home" 
            drawerType = "front"
            drawerContentOptions ={{activeBackgroundColor : "#6B6E70",activeTintColor:"#86C232", inactiveTintColor: "#6B6E70"
            ,itemStyle: { borderRadius:1,marginVertical: 0,borderBottomWidth:0.5,borderBottomColor:'#6B6E70' }
            ,labelStyle: {fontSize:20}}}
            drawerStyle = {{backgroundColor:"#222629",borderRadius:1,marginVertical: 0,borderRightWidth:0.5,borderRightColor:'#86C232'}} >
              <Drawer.Screen name="Home" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="home" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                >
               {() => <HomeFeed setHairdresserReservation ={setHairdresserReservation} hairdresser ={hairdresserOne} setHairdresser ={setHairdresserOne} isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                hairdressers = {hairdressers} text = "Welcome" user = {user}/>} 

                </Drawer.Screen>
              <Drawer.Screen name="My reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <ReservationList user = {user} text2 = {"Reservations"} DeleteReservation = {DeleteReservationApi}/>}
              </Drawer.Screen>
              
              <Drawer.Screen name="Create reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <AddReservation hairdresserReservation ={hairdresserReservation} setHairdresserReservation ={setHairdresserReservation} text = {"Create reservation"} hairdressers = {hairdressers} AddReservationApi = {AddReservationApi}/>} 
              </Drawer.Screen>
              <Drawer.Screen name="Edit profile" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <UpdateAccount user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} 
              </Drawer.Screen>
              <Drawer.Screen name="Change password" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                >
                {() => <ChangePassword user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} 

                </Drawer.Screen>
                <Drawer.Screen name="Hairdresser one" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="chair-rolling" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                >

                {(props : any) => <HairdresserOne {...props} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} setHairdresserReservation ={setHairdresserReservation} hairdresser = {hairdresserOne} user ={user} text ="Hairdresser detail" />} 
                </Drawer.Screen>
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
               >
                {() => <HomeFeed   setHairdresserReservation ={setHairdresserReservation} hairdresser ={hairdresserOne} setHairdresser ={setHairdresserOne} isHome ={true} AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} 
                hairdressers = {hairdressers} text = "Welcome" user = {user}/>} 
               </Drawer.Screen>

              <Drawer.Screen name="My reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="note-plus-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <ReservationList user = {user} text2 = {"Reservations"} DeleteReservation = {DeleteReservationApi}/>} 

              </Drawer.Screen>
             
              <Drawer.Screen name="My hairdressers" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="hair-dryer-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}>
              {() => <MyHairdresser hairdressers = {hairdressers} user = {user} text2 = {"My hairdressers"} DeleteReservation = {DeleteReservationApi}/>}
              </Drawer.Screen>
            <Drawer.Screen name="Create reservation" 
              options ={{drawerIcon:({focused, size}) => ( <Icon name="bookmark-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
              >
              {() => <AddReservation hairdresserReservation ={hairdresserReservation} setHairdresserReservation ={setHairdresserReservation} text = {"Create reservation"} hairdressers = {hairdressers} AddReservationApi = {AddReservationApi}/>} 

              </Drawer.Screen>
            <Drawer.Screen name="Edit profile" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="account-edit-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            >
            {() => <UpdateAccount user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} 

            </Drawer.Screen>
            <Drawer.Screen name="Change password" 
            options ={{drawerIcon:({focused, size}) => ( <Icon name="lock-outline" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
            >
            {() => <ChangePassword user = {user} text = {"Update account"} UpdateAccount = {UpdateAccountApi}/>} 

            </Drawer.Screen>
            <Drawer.Screen name="Hairdresser one" 
                options ={{drawerIcon:({focused, size}) => ( <Icon name="chair-rolling" type="material-community" size={size} color={focused ? '#86C232' : '#6B6E70'} /> )}}
                >

                {(props : any) => <HairdresserOne {...props}  AddFavouriteApi = {AddFavouriteApi} DeleteFavouriteApi = {DeleteFavouriteApi} setHairdresserReservation ={setHairdresserReservation} hairdresser = {hairdresserOne} user ={user} text ="Hairdresser detail" />} 
                </Drawer.Screen>
          </Drawer.Navigator>
           ) 
          
           
         }
      </NavigationContainer>
    );
  }
}

export default App;
