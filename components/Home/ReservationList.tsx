import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import { Card, Button,Avatar } from "react-native-paper";

import Carousel from "react-native-snap-carousel";
import HeaderComponent from "../Header/HeaderComponent";

interface ItemProps {
  title: string;
  text: string;
}

interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const exampleItems = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
];

const ReservationList: React.SFC<CustomCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <ReservationListCard />
    );
  }, []);

  return (
    <React.Fragment>
        <HeaderComponent />
        <SafeAreaView
        style={{ flex: 1, backgroundColor: "#222629", flexDirection: "column", flexWrap:"wrap" }} >
        <View style = {{flex: 0.1, flexDirection:"row",marginTop:"5%",flexWrap: "wrap", marginLeft:"5%"}}>
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
          <View style = {{flex: 0.1, flexDirection:"row",flexWrap: "wrap", marginLeft:"5%"}}>
              <View style ={{flex: 1}}>
              <Chip
                  title="Date"
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
        <View style = {{flex: 0.1}}>
            <Text style = {{fontSize:20, letterSpacing:2, color: "#86C232",marginLeft:"5%"}}>
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
const ReservationListCard = () =>{
    return (
        <React.Fragment>
            <Card style = {{backgroundColor:"#474B4F", borderWidth:1, borderColor:"#61892F",opacity:1,borderRadius:20, marginRight:"-3%"}}>
                <Card.Title titleStyle ={{color:"#86C232",fontSize:20, letterSpacing:2.5}} subtitleStyle ={{color:"white",fontSize:14}} title="Irea frizerski salon" subtitle="Naselje mose pijade, 0642125720" left={LeftContent} />
                <Card.Content>
                <Text style = {{fontSize:20,color:"white"}}><Text style = {{color:"#86C232"}}>Datum:</Text> 06/10/2020 15:49 </Text>
                <Text style = {{fontSize:20,color:"white"}}><Text style = {{color:"#86C232"}}>Status:</Text> Aktivan </Text>
                <Text style = {{color:"#86C232",fontSize:20}}>Opis:</Text>
                <Text style = {{fontSize:20, textAlign:"justify",color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus 
                    cum voluptas soluta quidem pariatur optio dolore eligendi 
                    voluptates quibusdam sequi fugit nulla iure ipsum exercitationem, dicta assumenda porro doloribus asperiores?</Text>
                </Card.Content>
                <Card.Actions style = {{marginBottom:"3%"}}>
                <Button style = {{backgroundColor:"#61892F",width:"30%", marginLeft: "67%"}}> <Text style = {{color:"white"}}>Delete</Text></Button>
                </Card.Actions>
            </Card>
        </React.Fragment>
    );
}
export default ReservationList;