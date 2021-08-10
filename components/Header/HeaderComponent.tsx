import "react-native-gesture-handler";
import React from "react";
import { Header, Icon } from "react-native-elements";
import { useNavigation,DrawerActions } from '@react-navigation/native';



interface Props {
  navigation: any;
}

const HeaderComponent = () => {
  return (
    <React.Fragment>
      <Header
        backgroundColor="#222629"
        placement="center"
    
        leftComponent={<LeftComponent />}
        centerComponent={{ text: "Welcome hairdresser", style: { color: "#86C232",fontFamily:"sans-serif-medium",fontSize:18 } }}
        rightComponent={<RightComponent />}
      />
    </React.Fragment>
  );
};

export default HeaderComponent;

const LeftComponent = () => {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <Icon name="menu" type="entypo" size ={30} color = "#86C232"  onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
    </React.Fragment>
  );
};

const RightComponent = () => {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <Icon name="home" size = {30} type="entypo" color = "#86C232" onPress={() => navigation.navigate('Home')} />
    </React.Fragment>
  );
};
