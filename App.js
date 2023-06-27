import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Post from './src/screens/Post';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';
import { NavigationContainer } from '@react-navigation/native';
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
    //setTimeout을 이용하면 몇초간 스플래시 스크린을 보여주고 싶은지 설정할 수 있다.
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isSignedIn = getIsSignedIn();

  //하단바 
  const BottomTabScreens = () => {
    return (
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          // tabBarStyle: {
          //   height: 70,
          // },
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name == 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              
            } else if(route.name == 'Post') {
              iconName =  focused ? 'create-sharp' : 'create-outline';
            } else if(route.name == 'Participant') {
              iconName = focused ?  'ios-megaphone-sharp' : 'ios-megaphone-outline';
            } else if(route.name == 'Map') {
              // iconName = focused ? 'ios-walk-sharp' : 'ios-walk-outline';
              iconName = focused ?  'ios-location-sharp' : 'ios-location-outline';
            } else if(route.name == 'Profile') {
              iconName = focused ? 'ios-person-sharp' : 'ios-person-outline';
            }
            // return <Ionic name={iconName} size={size} color={color} />;
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

const styles = StyleSheet.create({

})

export default App;