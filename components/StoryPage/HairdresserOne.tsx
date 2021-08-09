import 'react-native-gesture-handler';
import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import { SafeAreaView , View, Text, ImageBackground, Alert} from 'react-native';
import { FAB } from 'react-native-elements/dist/buttons/FAB';
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Tooltip } from 'react-native-elements/dist/tooltip/Tooltip';
import { Chip } from 'react-native-elements/dist/buttons/Chip';

const image1 = { uri: "https://img.freepik.com/free-photo/scissors-close-up-dark-black-background_93675-73882.jpg?size=626&ext=jpg" };
const image = { uri: "https://cdn.wallpapersafari.com/65/16/JCpf34.jpg" };


const HairdresserOne = () => {
    
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
                                />
                                
                                <FAB 
                                iconContainerStyle = {{backgroundColor:"#61892F"}}
                                size ='large'
                                color = "white"
                                style ={{marginLeft:"3%"}}
                                icon = {{name:"cash-multiple", type:"material-community",color:"white",size:25}}/>
                                <FAB 
                                iconContainerStyle = {{backgroundColor:"#61892F"}}
                                size ='large'
                                color = "white"
                                style ={{marginLeft:"3%"}}

                                icon = {{name:"share", type:"material-community",color:"white",size:25}}/>
                        </View>
                        <View style ={{flex: 0.3,flexDirection:"row",  alignContent:"space-between",marginLeft:"5%"}}>
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='facebook' iconSize = {25} />
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='google' iconSize = {25} />
                            <SocialIcon style = {{backgroundColor:"#61892F"}} type='instagram' iconSize = {25} />
                        </View>
                        
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