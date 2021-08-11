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
    hairdressers : Hairdresser[];
    text : string;
    user : User | null;
    isHome : boolean;
}

const HomeFeed = (props : Props) => {
    const [active, setActive] = React.useState<number> (0);
    const [text,setText] = React.useState<string> ("");
    const [hairdressers, setHairdressers] = React.useState<Hairdresser[]> ([]);
    const HandleSearch = (textS : string)=>{

    }
    const HandleActive = (el : number)=>{
        
    }
    React.useEffect(()=>{
        var hair = {...props.hairdressers};
        setHairdressers(hair);
    },[])
    return (
        <React.Fragment>
            <HeaderComponent text = {props.text} />
            <View style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
                { props.isHome ? (<HomeFeedChip active = {active} HandleActive ={HandleActive}/>) :("") }
                <HomeFeedSearch text = {text} HandleSearch ={HandleSearch}/>
                <HomeFeedList hairdressers ={hairdressers} user ={props.user} AddFavouriteApi ={props.AddFavouriteApi} DeleteFavouriteApi ={props.DeleteFavouriteApi} />
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
                containerStyle = { {width:"90%"}}
                onPress = {()=> props.HandleActive(1)}
                style = {{backgroundColor:"red"}}
            />
            </View>
            <View style ={{flex: 1}}>
            <Chip
                title="Popular"
                type="outline"
                buttonStyle = {props.active === 2 ? {backgroundColor:"#61892F"} : {}}
                titleStyle = {{color:"white",fontFamily: "sans-serif-medium"}}
                containerStyle = {{width:"90%"}}
                onPress = {()=> props.HandleActive(2)}
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