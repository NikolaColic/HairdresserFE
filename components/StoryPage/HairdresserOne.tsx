import 'react-native-gesture-handler';
import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import { SafeAreaView , View, Text, ImageBackground, Alert, Linking, Share} from 'react-native';
import { FAB } from 'react-native-elements/dist/buttons/FAB';
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
import {Snackbar} from 'react-native-paper'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Chip } from 'react-native-elements/dist/buttons/Chip';
import { useNavigation} from '@react-navigation/native';
import { Hairdresser } from '../../model/Hairdresser';
import { User } from '../../model/User';

const image = { uri: "https://cdn.wallpapersafari.com/65/16/JCpf34.jpg" };

interface Props {
    hairdresser : Hairdresser | undefined;
    user : User;
    text : string;
}

const HairdresserOne = (props : Props) => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState<number> (0);
    const HandleSocial = (isFacebook :boolean) =>{
        if(isFacebook){
            const face = props.hairdresser?.socialNetworks.find((el)=> el.socialNetwork.name.toLowerCase() === "facebook");
            return face === undefined ? "" : face.url;
        }else{
            const face = props.hairdresser?.socialNetworks.find((el)=> el.socialNetwork.name.toLowerCase() === "instagram");
            return face === undefined ? "" : face.url;
        }
    }
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Posetite frizerski salon' + props.hairdresser?.name + ' koji se nalazi na lokaciji ' + props.hairdresser?.adress +
              ' u opstini ' + props.hairdresser?.municipality.name,
            url: props.hairdresser?.website,
            title : 'Skinite aplikaciju i rezervisite mesto u frizerskim salonima'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    return (
        <React.Fragment>
            <HeaderComponent text = {props.text} />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column"}}>
                <View  style = {{flex: 0.3}}>
                    <View style ={{flex:1}} >
                        <ImageBackground source={image} resizeMode="cover" style = {{width:"100%", height:"100%", alignItems:"center", justifyContent:"center"}}>
                            <Text style ={{color:"#86C232",textShadowRadius:80,textShadowColor:"white",fontFamily:"sans-serif-medium",fontSize:40, letterSpacing:4, textAlign:"center", textTransform:"uppercase"}}>
                                {props.hairdresser?.name}
                            </Text>
                            <Chip
                                onPress = {()=> navigation.navigate('Create reservation')}
                                title="Create reservation"
                                type="outline"
                                titleStyle = {{color:"white",fontFamily:"sans-serif-medium"}}
                                containerStyle = {{width:"35%", backgroundColor:"#474B4F", borderRadius:15, marginTop:"2%"}}
                            />
                        </ImageBackground>

                    </View>
                </View>
                <View  style = {{flex: 0.7}}>
                    <ImageBackground source={image} resizeMode="cover" style = {{width:"100%", height:"100%", alignItems:"flex-start", justifyContent:"flex-start"}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="cellphone" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            {props.hairdresser?.number}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="email-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            {props.hairdresser?.gmail}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="map-marker-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            {props.hairdresser?.adress}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="map-marker-radius-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            {props.hairdresser?.municipality.name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="account-circle-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            {props.hairdresser?.owner.username  }
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="gender-male-female" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            {props.hairdresser?.gender === 1 ? "Muski" : props.hairdresser?.gender === 2 ? "Zenski" : "Oba"}
                            </Text>
                        </View>
                        <View style ={{flex: 0.3,flexDirection:"row", alignContent:"space-between", marginLeft:"6%"}}>
                                <FAB 
                                iconContainerStyle = {{backgroundColor:"#61892F"}}
                                size ='large'
                                color = "white"
                                icon = {{name:"information-outline", type:"material-community",color:"white",size:25}}
                                onPress = {()=> setVisible(1)}
                                />
                                
                                <FAB 
                                iconContainerStyle = {{backgroundColor:"#61892F"}}
                                size ='large'
                                color = "white"
                                style ={{marginLeft:"3%"}}
                                onPress = {()=> setVisible(2)}

                                icon = {{name:"cash-multiple", type:"material-community",color:"white",size:25}}/>
                                <FAB 
                                iconContainerStyle = {{backgroundColor:"#61892F"}}
                                size ='large'
                                color = "white"
                                style ={{marginLeft:"3%"}}
                                onPress = {()=> onShare()}
                                icon = {{name:"share", type:"material-community",color:"white",size:25}}/>
                        </View>
                        <View style ={{flex: 0.3,flexDirection:"row",  alignContent:"space-between",marginLeft:"5%"}}>
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='facebook' iconSize = {25} onPress = {()=> Linking.openURL(HandleSocial(true)).catch(err => console.error("Couldn't load page", err))} />
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='google' iconSize = {25} onPress = {()=> Linking.openURL(props.hairdresser !== undefined ? props.hairdresser.website : "").catch(err => console.error("Couldn't load page", err))} />
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='instagram' iconSize = {25} onPress = {()=> Linking.openURL(HandleSocial(false)).catch(err => console.error("Couldn't load page", err))} />
                        </View>
                        <Snackbar
                            visible = {visible > 0}
                            onDismiss = {() => setVisible(0)}
                            duration = {30000}
                            style = {{borderWidth:2, borderColor:"#61892F"}}
                            action={{
                                label: 'X',
                                onPress: () => {
                                setVisible(0)
                                },
                            }}>
                                <Text style = {{fontSize:15,color:"white",letterSpacing:1.5, fontFamily:"sans-serif-medium", lineHeight:20}}>
                                  {
                                      visible === 1 ? props.hairdresser?.description : visible === 2 ? props.hairdresser?.pricelist : ""
                                  }
                                </Text>
            </Snackbar>
                    </ImageBackground>
                </View>
        </SafeAreaView>
    </React.Fragment>
    )
}
interface Props {
    open : boolean; 
    setOpen : (value : boolean) => void;
}


export default HairdresserOne;