import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Post from './src/screens/Post';
import Profile from './src/screens/Profile';

import EditProfile from './src/screens/EditProfile';


import Map from './src/screens/Map';
import Participant from './src/screens/Participant';
import Ionic from 'react-native-vector-icons/Ionicons';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn.js';
import SplashScreen from 'react-native-splash-screen';
import Content from './src/screens/Content';

const getIsSignedIn = () => {
  // custom logic
  return false;
};


const App = () => {

  useEffect(() => {
    //setTimeout을 이용하면 1초간 스플래시 스크린을 보여줌
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isSignedIn = getIsSignedIn();

  //하단바 생성
  const BottomTabScreens = () => {
    return (
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
        
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if(route.name == 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              
            } else if(route.name == 'Post') {
              iconName =  focused ? 'create-sharp' : 'create-outline';
            } else if(route.name == 'Participant') {
              iconName = focused ?  'ios-megaphone-sharp' : 'ios-megaphone-outline';
            } else if(route.name == 'Map') {
              iconName = focused ?  'ios-location-sharp' : 'ios-location-outline';
            } else if(route.name == 'Profile') {
              iconName = focused ? 'ios-person-sharp' : 'ios-person-outline';
            }
          
            return <Ionic name={iconName} size={size} color={color = focused ? '#0BE060' : '#797979'} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Participant" component={Participant} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };


//stack 네비게이션  
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {/* 로그인 true 바로 홈화면 로그인 false 면 로그인 화면 */}
          {isSignedIn ? (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
            )}

            <Stack.Screen name="Main" component={BottomTabScreens} />
            <Stack.Screen name="Content" component={Content} /> 

            
            <Stack.Screen name="EditProfile" component={EditProfile} />



        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;