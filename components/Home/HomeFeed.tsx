import 'react-native-gesture-handler';
import React from 'react';
import { View,Text } from 'react-native';

import {Chip} from 'react-native-elements'
import { Searchbar } from 'react-native-paper';

import HeaderComponent from '../Header/HeaderComponent';
import HomeFeedList from './HomeFeedList';

const HomeFeed = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <View style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column" }} >
                <HomeFeedChip />
                <HomeFeedSearch />
                <HomeFeedList />
            </View>
        </React.Fragment>
    )
}



const HomeFeedChip = () =>{
    return (
        <React.Fragment >
            <View style ={{flex: 0.1,flexDirection:"row", marginTop:"5%"}}>
            <View style ={{flex: 1}}>
            <Chip
                title="Favourite"
                type="outline"
                titleStyle = {{color:"white"}}
                containerStyle = {{width:"90%"}}
                style = {{backgroundColor:"red"}}
            />
            </View>
            <View style ={{flex: 1}}>
            <Chip
                title="Popular"
                type="outline"
                titleStyle = {{color:"white"}}
                containerStyle = {{width:"90%"}}
                style = {{backgroundColor:"red"}}
            />
            </View>
            <View style ={{flex: 1}}>
            <Chip
                title="All"
                type="outline"
                titleStyle = {{color:"white"}}
                containerStyle = {{width:"90%"}}
                style = {{backgroundColor:"red"}}
            />
            </View>
            </View>
        </React.Fragment>
    );
}

const HomeFeedSearch = () =>{
    const [text, setText] = React.useState<string> ("");
    return (
        <React.Fragment>
            <View style ={{flex: 0.1,flexDirection:"column", marginTop:"2.5%",marginBottom:"2%", width:"95%", marginLeft:"3%"}}>
            <Searchbar 
            value = {text}
            inputStyle = {{color:"white"}}
            onChangeText = {(text)=> setText(text)}
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