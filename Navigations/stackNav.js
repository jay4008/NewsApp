import React, {useRef, useEffect, useContext} from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator();
import {
Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Home from '../screens/Home';
import NewsDetailes from '../screens/NewsDetailes';

function MyStack(props) {

  const headerOptionForStackPage = {
    headerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerTintColor: '#000',
    headerTopInsetEnabled: false,
  };
//

const HeaderShown = () =>{
    return(
        <View>
           <Image style = {styles.headerlog}  source = {require('../assets/icons8-news-128.png')}></Image>
        </View>
    )
}
const HeaderRightShown = () =>{
    return(
        <TouchableOpacity >
           <Image style = {styles.HeaderIcon}  source = {require('../assets/icons8-notification-100.png')}></Image>
        </TouchableOpacity>
    )
}

const HeaderLeftShown = () =>{
    return(
        <TouchableOpacity onPress = {()=> props.navigation.openDrawer()}>

           <Image style = {styles.HeaderIcon}  source = {require('../assets/icons8-menu-128.png')}></Image>
        </TouchableOpacity>
    )
}

  return (
    <Stack.Navigator screenOptions={headerOptionForStackPage}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: '#224585',
          headerTitleStyle: {color: '#000', fontSize: 14},
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft:() => <HeaderLeftShown/>,
         headerCenter:() => <HeaderShown/>,
         headerRight :() =>  <HeaderRightShown/>,
        }}
      />
         <Stack.Screen
        name="NewsDetailes"
        component={NewsDetailes}
        
        options={{
          title :"Details",
          headerTintColor: '#224585',
          headerTitleStyle: {color: '#000', fontSize: 14},
          headerStyle: {
            backgroundColor: '#fff',
          },
        //   headerLeft:() => <HeaderLeftShown/>,
        //  headerCenter:() => <HeaderShown/>,
         headerRight :() =>  <HeaderRightShown/>,
        }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;

const styles = StyleSheet.create({
    headerlog:{
        height : 35,
        width :35,
        resizeMode :'stretch'
    },
    HeaderIcon:{
        height : 25,
        width :25,
        resizeMode :'stretch'
    }
})
