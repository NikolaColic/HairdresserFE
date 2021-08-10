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

const image = { uri: "https://cdn.wallpapersafari.com/65/16/JCpf34.jpg" };

const HairdresserOne = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState<boolean> (false);

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Ovo je poruka koju ste dobili iz nikoline aplikacije',
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
            <HeaderComponent  />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column"}}>
                <View  style = {{flex: 0.3}}>
                    <View style ={{flex:1}} >
                        <ImageBackground source={image} resizeMode="cover" style = {{width:"100%", height:"100%", alignItems:"center", justifyContent:"center"}}>
                            <Text style ={{color:"#86C232",textShadowRadius:80,textShadowColor:"white",fontFamily:"sans-serif-medium",fontSize:40, letterSpacing:4, textAlign:"center", textTransform:"uppercase"}}>
                                Irea frizerski salon
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
                            0642125720
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="email-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            irea@gmail.com
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="map-marker-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            Naselje mose pijade 32
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="map-marker-radius-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            Vračar
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="account-circle-outline" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            Nikola Čolić
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft:"5%", marginTop:"2%" }}>
                            <Icon name="gender-male-female" type ="material-community" size={30} color = "#86C232"/>
                            <Text style = {{fontSize:20,color:"white", marginLeft:"3%",fontFamily:"sans-serif-medium"}}>
                            Muski
                            </Text>
                        </View>
                        <View style ={{flex: 0.3,flexDirection:"row", alignContent:"space-between", marginLeft:"6%"}}>
                                <FAB 
                                iconContainerStyle = {{backgroundColor:"#61892F"}}
                                size ='large'
                                color = "white"
                                icon = {{name:"information-outline", type:"material-community",color:"white",size:25}}
                                onPress = {()=> setVisible(true)}
                                />
                                
                                <FAB 
                                iconContainerStyle = {{backgroundColor:"#61892F"}}
                                size ='large'
                                color = "white"
                                style ={{marginLeft:"3%"}}
                                onPress = {()=> setVisible(true)}

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
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='facebook' iconSize = {25} onPress = {()=> Linking.openURL("https://www.instagram.com/partizanbc/?hl=en").catch(err => console.error("Couldn't load page", err))} />
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='google' iconSize = {25} onPress = {()=> Linking.openURL("https://www.instagram.com/partizanbc/?hl=en").catch(err => console.error("Couldn't load page", err))} />
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='instagram' iconSize = {25} onPress = {()=> Linking.openURL("https://www.instagram.com/partizanbc/?hl=en").catch(err => console.error("Couldn't load page", err))} />
                        </View>
                        <Snackbar
                            visible = {visible}
                            onDismiss = {() => setVisible(false)}
                            duration = {30000}
                            style = {{borderWidth:2, borderColor:"#61892F"}}
                            action={{
                                label: 'X',
                                onPress: () => {
                                setVisible(false)
                                },
                            }}>
                                <Text style = {{fontSize:15,color:"white",letterSpacing:1.5, fontFamily:"sans-serif-medium", lineHeight:20}}>
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum laboriosam repudiandae dolorum odit. Sapiente officiis optio obcaecati, in, vel a quae asperiores aliquid ipsam atque exercitationem sed dolore deserunt ullam totam hic sunt et nobis est explicabo minima, tempora quidem enim dolor. Quibusdam, sed incidunt excepturi ab tenetur debitis at libero, nam reiciendis quasi distinctio. Aliquam, mollitia animi? Adipisci non ullam distinctio! Velit, ipsa inventore harum tempora architecto ad amet itaque enim reprehenderit tempore aliquid distinctio nam doloribus nemo pariatur. Delectus porro expedita amet sapiente repellat aliquid molestiae velit officiis quae! Suscipit, nobis quis! Quaerat autem nihil optio consequuntur velit voluptatum, perspiciatis quam repudiandae ratione perferendis deleniti minima dolorem, odio doloribus itaque saepe. Suscipit tenetur repellat soluta similique ipsum tempora placeat velit modi quas, et ducimus sint tempore, officiis dolorem magnam illum voluptatum quo quisquam! Asperiores eligendi sequi aperiam non ullam natus, quia ipsam numquam incidunt! Impedit aut consequatur atque?
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