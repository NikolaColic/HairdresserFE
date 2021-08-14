import 'react-native-gesture-handler';
import React from 'react';
import { View,Text } from 'react-native';

import {Chip} from 'react-native-elements'
import { Searchbar } from 'react-native-paper';

import HeaderComponent from '../Header/HeaderComponent';
import HomeFeedList from './HomeFeedList';
import { Hairdresser } from '../../model/Hairdresser';
import { User } from '../../model/User';

interface Props  {
    AddFavouriteApi : (hairdresser : Hairdresser) => void;
    DeleteFavouriteApi : (hairdresser : Hairdresser) => void;
    hairdressers : Hairdresser[] | undefined;
    text : string;
    user : User | null;
    isHome : boolean;
    hairdresser : Hairdresser | undefined;
    setHairdresser : (hairdresser : Hairdresser | undefined) => void;
    setHairdresserReservation : (hairdresserReservation : Hairdresser | undefined) => void;
}

const HomeFeed = (props : Props) => {
    const [active, setActive] = React.useState<number> (0);
    const [text,setText] = React.useState<string> ("");
    const [hairdressers, setHairdressers] = React.useState<Hairdresser[] | undefined> ([]);

    React.useEffect(()=>{
        setHairdressers(props.hairdressers?.map((el)=> el));
    },[])

    
    const HandleSearch = (textS : string)=>{
        const hairdressersSearch = props.hairdressers?.filter((el)=> el.name.toLowerCase().includes(textS.toLowerCase()));
        setText(textS);
        if(hairdressersSearch?.length === 0) return;
        setHairdressers(hairdressersSearch);

    }
    const HandleActive = (el : number)=>{
        if(el === 1){
            setHairdressers(props.hairdressers?.map((el)=> el));
        }else if(el ===2){

        }else{
            const values = hairdressers?.filter((el)=> props.user !== null && props.user.favouritesHairdresser !== null &&
            props.user.favouritesHairdresser.find((favo)=> favo.hairdresser.hairdresserId === el.hairdresserId) !== undefined);
            setHairdressers(values);
        }
    }
   
    return (
        <React.Fragment>
            <HeaderComponent text = {props.text} />
            <View style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
                { props.isHome && props.user !== null ? (<HomeFeedChip active = {active} HandleActive ={HandleActive}/>) :(<Text></Text>) }
                <HomeFeedSearch text = {text} HandleSearch ={HandleSearch}/>
                <HomeFeedList setHairdresserReservation ={props.setHairdresserReservation} hairdresser = {props.hairdresser} setHairdresser ={props.setHairdresser} hairdressers ={hairdressers} user ={props.user} AddFavouriteApi ={props.AddFavouriteApi} DeleteFavouriteApi ={props.DeleteFavouriteApi} />
            </View>
        </React.Fragment>
    )
}

interface PropsChip {
    active : number;
    HandleActive : (active : number) => void;
}

const HomeFeedChip = (props : PropsChip) =>{
    

    return (
        <React.Fragment >
            <View style ={{flex: 0.1,flexDirection:"row", marginTop:"5%"}}>
            <View style ={{flex: 1}}>
            <Chip
                title="All"
                type="outline"
                buttonStyle = {props.active === 1 ? {backgroundColor:"#61892F"} : {}}
                titleStyle = {{color:"white",fontFamily: "sans-serif-medium"}}
                containerStyle = { {width:"90%", marginLeft:"5%"}}
                onPress = {()=> props.HandleActive(1)}
                style = {{backgroundColor:"red"}}
            />
            </View>
            <View style ={{flex: 1}}>
            <Chip
                title="Favourite"
                type="outline"
                buttonStyle = {props.active === 3 ? {backgroundColor:"#61892F"} : {}}
                titleStyle = {{color:"white",fontFamily: "sans-serif-medium"}}
                containerStyle = {{width:"90%"}}
                onPress = {()=>props.HandleActive(3)}
                style = {{backgroundColor:"red"}}
            />
            </View>
            </View>
        </React.Fragment>
    );
}

interface PropsSearch {
    text : string; 
    HandleSearch : (text : string) => void;
}
const HomeFeedSearch = (props : PropsSearch) =>{
    return (
        <React.Fragment>
            <View style ={{flex: 0.1,flexDirection:"column", marginTop:"2.5%",marginBottom:"2%", width:"95%", marginLeft:"3%"}}>
            <Searchbar 
            value = {props.text}
            inputStyle = {{color:"white"}}
            onChangeText = {(text)=> props.HandleSearch(text)}
            iconColor = "#6B6E70"
            placeholderTextColor = "#6B6E70"
            style = {{backgroundColor:"#474B4F"}}
            placeholder="Type Here..."
            /> 
            </View>
        </React.Fragment>
    );
}


export default HomeFeed;