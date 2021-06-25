/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {AuthContext} from './services/context';
import LinearGradient from 'react-native-linear-gradient';
enableScreens(true);

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyStack from './Navigations/stackNav';
import RootDrawerNav from './Navigations/RootDrawerNav';
import store, { RootState } from "./store";
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const viewShot = useRef();
  const [isLoad, setIsLoad] = useState(true);
  const authContext = React.useMemo(() => ({
    viewContext: viewShot,
  }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
  }, []);
  if (isLoad) {
    return (
      <LinearGradient
        colors={['#fff', '#3b5998', '#71C2FF']}
        style={styles.linearGradient}>
       <Image source = {require('./assets/icons8-news-128.png')} style = {{height : 100, width :100 , resizeMode :'stretch'}}></Image>
       <Text style = {{fontSize :18, color :"#fff", marginTop:  10,}}>News Hunt</Text>
      </LinearGradient>
    );
  }

  return (
    <>
     <Provider store={store}>
     <AuthContext.Provider value={authContext}>
      <NavigationContainer>
       <RootDrawerNav/>
      </NavigationContainer>
      </AuthContext.Provider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  linearGradient: {
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
  },
});

export default App;
