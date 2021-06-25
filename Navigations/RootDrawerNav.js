import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import MyStack from './stackNav';
const Drawer = createDrawerNavigator();
const RootDrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Root"
        drawerContent={(props) => <DrawerContent {...props}  />}>
        <Drawer.Screen name="Root" component={MyStack} />
      </Drawer.Navigator>
    </>
  );
};

export default RootDrawerNav;
