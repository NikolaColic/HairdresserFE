import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import { Card, Button,Avatar } from "react-native-paper";

import Carousel from "react-native-snap-carousel";
import { Hairdresser } from "../../model/Hairdresser";
import { Reservation } from "../../model/Reservation";
import { User } from "../../model/User";
import HeaderComponent from "../Header/HeaderComponent";

interface ItemProps {
  reservation : Reservation;
}

interface CustomCarouselProps {
  DeleteReservation : (reservation : Reservation) => void;
  user : User | null;
  text2 : string;
  hairdressers : Hairdresser[] | undefined;
}

interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const exampleItems = [
];



const MyHairdresser  = (props : CustomCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>([]);
  const [active, setActive] = React.useState<number> (-1);
  var count = 1;
  const ref = useRef(null);
  React.useEffect(()=>{
    var itemProps : ItemProps[] = [];
    if(props.user !== null && props.hairdressers !== undefined && props.user.hairdressersOwner !==  null){

      const hairdressersOwner = props.hairdressers.filter((el)=> props.user?.hairdressersOwner.find((e)=> e.hairdresserId == el.hairdresserId) !== undefined);
      if(hairdressersOwner.length > 0){
        hairdressersOwner.forEach((el)=>{
          if(el.reservations !==  null){
            el.reservations.map((reser)=>{
              reser.hairdresser = el;
              var itemProp : ItemProps = {reservation: reser};
              itemProps.push(itemProp);
  
            });
          } 
        })
      }
    
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
    if(props.user !== null && props.hairdressers !== undefined && props.user.hairdressersOwner !==  null){

      if(broj > 0){
        const hairdressersOwner = props.hairdressers.find((el)=> el.hairdresserId === broj);
        if(hairdressersOwner != undefined){
         
              hairdressersOwner.reservations?.map((reser)=>{
                reser.hairdresser = hairdressersOwner;
                var itemProp : ItemProps = {reservation: reser};
                itemProps.push(itemProp);
    
              });
          } 

      }else{
          const hairdressersOwner = props.hairdressers.filter((el)=> props.user?.hairdressersOwner.find((e)=> e.hairdresserId == el.hairdresserId) !== undefined);
          if(hairdressersOwner.length > 0){
            hairdressersOwner.forEach((el)=>{
              if(el.reservations !==  null){
                el.reservations.map((reser)=>{
                  reser.hairdresser = el;
                  var itemProp : ItemProps = {reservation: reser};
                  itemProps.push(itemProp);
      
                });
              } 
            })
          }
      }
      setActive(broj);
      setCarouselItems(itemProps);
    }
  }


  return (
    <React.Fragment>
        <HeaderComponent text = {props.text2}/>
        <SafeAreaView
        style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column", flexWrap:"wrap"}} >
       
          <View style = {{flex: 0.1, flexDirection:"row",flexWrap: "wrap", marginLeft:"5%", marginTop:"5%", marginBottom:"5%"}}>
          {/* <View style ={{flex: 2,flexDirection:"row"}}> */}
            <Chip
              title="All"
              type="outline"
              buttonStyle = {active === 0 ? {backgroundColor:"#61892F"} : {}}
              titleStyle = {{color:"white"}}
              containerStyle = {{width:"80%",flexBasis:"45%",marginTop:"1%", marginLeft:"2%"}}
              style = {{backgroundColor:"red"}}
              onPress = {()=> HandleFavourite(0)}
            />
            {/* </View> */}
              {
                props.user?.hairdressersOwner.map((el)=>(
                  <React.Fragment key = {el.hairdresserId}>
                    {/* <View style ={{flex: 1}}> */}
                    <Chip
                        title={el.name}
                        type="outline"
                        buttonStyle = {active === el.hairdresserId ? {backgroundColor:"#61892F"} : {}}
                        titleStyle = {{color:"white"}}
                        containerStyle = {{width:"80%",flexBasis:"45%", marginTop:"1%", marginLeft:"1%"}}
                        style = {{backgroundColor:"red"}}
                        onPress = {()=> HandleFavourite(el.hairdresserId)}
                    />
                  {/* </View> */}
                  </React.Fragment>
                ))
              }
              
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
            <Card style = {{backgroundColor:"#474B4F", borderWidth:1, marginBottom:"5%", borderColor:"#61892F",opacity:1,borderRadius:20, marginRight:"-3%"}}>
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
               
            </Card>
        </React.Fragment>
    );
}
export default MyHairdresser;