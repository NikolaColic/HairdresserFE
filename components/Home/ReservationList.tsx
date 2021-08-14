import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import { Card, Button,Avatar } from "react-native-paper";

import Carousel from "react-native-snap-carousel";
import { Reservation } from "../../model/Reservation";
import { User } from "../../model/User";
import HeaderComponent from "../Header/HeaderComponent";

//DODATI I SHARE DUGME
interface ItemProps {
  reservation : Reservation;
}

interface CustomCarouselProps {
  DeleteReservation : (reservation : Reservation) => void;
  user : User | null;
  text2 : string;

}

interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const exampleItems = [
];

const ReservationList = (props : CustomCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>([]);
  const [active, setActive] = React.useState<number> (0);

  const ref = useRef(null);
  React.useEffect(()=>{
    var itemProps : ItemProps[] = [];
    if(props.user !== null && props.user.reservationsHistory !== null){
      props.user.reservationsHistory.map((el)=> {
        var itemProp : ItemProps = {reservation: el};
        itemProps.push(itemProp);
      });
      setCarouselItems(itemProps);
    }
  },[props.user])
  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <ReservationListCard  reservation = {item.reservation} DeleteReservation ={props.DeleteReservation}/>
    );
  }, []);

  const HandleFavourite = (broj : number)=>{
    var itemProps : ItemProps[] = [];
    setActive(broj);
    var resHistory : Reservation[] | undefined = [];
    if(props.user !== null && props.user.reservationsHistory !== null){
      if(broj == 1){
          resHistory = props.user?.reservationsHistory;
      }else{
        resHistory = props.user?.reservationsHistory.filter((el)=> props.user?.favouritesHairdresser.find((e)=> e.hairdresser.hairdresserId === el.hairdresser.hairdresserId) !== undefined);
      }
        resHistory.map((el)=> {
          var itemProp : ItemProps = {reservation: el};
          itemProps.push(itemProp);
        });
        setCarouselItems(itemProps);
    }
  }

  return (
    <React.Fragment>
        <HeaderComponent text = {props.text2} />
        <SafeAreaView
        style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column", flexWrap:"wrap"}} >
        <View style = {{flex: 0.1, flexDirection:"row",marginTop:"5%",flexWrap: "wrap", marginLeft:"5%"}}>
              <View style ={{flex: 1}}>
              <Chip
                  title="All"
                  type="outline"
                  titleStyle = {{color:"white"}}
                  buttonStyle = {active === 1 ? {backgroundColor:"#61892F"} : {}}
                  containerStyle = {{width:"90%"}}
                  style = {{backgroundColor:"red"}}
                  onPress = {()=> HandleFavourite(1)}
              />
              </View>
              <View style ={{flex: 1}}>
              <Chip
                  title="Favourite"
                  type="outline"
                  titleStyle = {{color:"white"}}
                  buttonStyle = {active === 2 ? {backgroundColor:"#61892F"} : {}}
                  containerStyle = {{width:"90%"}}
                  style = {{backgroundColor:"red"}}
                  onPress = {()=> HandleFavourite(2)}
              />
              </View>
              
              
          </View>
         
        <View style = {{flex: 0.1}}>
            <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",marginLeft:"5%",fontFamily: "sans-serif-medium"}}>
                    List of reservations:
            </Text>

        </View>
        <View style={{ flex: 0.7, flexDirection: "row", justifyContent: "center",  marginLeft:"5%" }}>
            
            <Carousel
            layout={"default"}
            ref={ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={(index: number) => setActiveIndex(index)}
            />
        </View>
        </SafeAreaView>
    </React.Fragment>
  );
};

const LeftContent = (props : any) => <Avatar.Text {...props} style = {{backgroundColor:"#222629"}} label = "A" />
interface PropsListCard {
  reservation : Reservation;
  DeleteReservation: (res : Reservation) => void;
}
const ReservationListCard = (props : PropsListCard) =>{
    return (
        <React.Fragment>
            <Card style = {{backgroundColor:"#474B4F", borderWidth:1, borderColor:"#61892F",opacity:1,borderRadius:20, marginRight:"-3%"}}>
                <Card.Title titleStyle ={{color:"#86C232",fontSize:20, letterSpacing:2.5, fontFamily: "sans-serif-medium"}} 
                subtitleStyle ={{color:"white",fontSize:14}} title={props.reservation.hairdresser.name} subtitle={props.reservation.hairdresser.adress + ", " + props.reservation.hairdresser.number} left={LeftContent} />
                <Card.Content>
                <Text style = {{fontSize:18,color:"white",fontFamily: "sans-serif-medium"}}><Text style = {{color:"#86C232"}}>Datum:</Text> { new Date(props.reservation.time).toLocaleDateString() + " " + new Date(props.reservation.time).toLocaleTimeString() } </Text>
                <Text style = { new Date(props.reservation.time) > new Date() ? {fontSize:18,color:"white",fontFamily: "sans-serif-medium"} : {fontSize:18,color:"#C3073F",fontFamily: "sans-serif-medium"}}><Text style = {{color:"#86C232"}}>Status:</Text>  { new Date(props.reservation.time) > new Date() ? "Aktivan" : "Pasivan" } </Text>
                <Text style = {{color:"#86C232",fontSize:20,fontFamily: "sans-serif-medium"}}>Opis:</Text>
                <Text style = {{fontSize:18, textAlign:"justify",color:"white",fontFamily: "sans-serif-medium"}}>
                   {props.reservation.description}
                </Text>
                </Card.Content>
                <Card.Actions style = {{marginBottom:"3%"}}>

                <Button 
                onPress = {()=> props.DeleteReservation(props.reservation)}
                style = {{backgroundColor:"#61892F",width:"30%", marginLeft: "67%"}}> <Text style = {{color:"white"}}>Delete</Text></Button>
                </Card.Actions>
            </Card>
        </React.Fragment>
    );
}
export default ReservationList;