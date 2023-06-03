import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, Item } from 'react-native';
import React from 'react';
import { useTheme } from 'styled-components';
import ImplementCard from '../components/HomeCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { DialogHeader } from '@react-native-material/core';

const dd = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const implementData = [
  {
    id: 1,
    image: require('../../assets/images/bamboo.jpeg'),
    title: '대나무 칫솔 사용하기',
    content: dd
  },
  {
    id: 2,
    image: require('../../assets/images/basket.jpeg'),
    title: '장바구니 사용하기',
    content:dd
  },
  {
    id: 3,
    image: require('../../assets/images/tumbler.jpeg'),
    title: '텀블러 사용하기',
    content: dd
  },
  {
    id: 4,
    image: require('../../assets/images/shampoo.jpeg'),
    title: '고체샴퓨 사용하기',
    content: dd
  },
]


const Home = ({navigation}) => {
  let jejuImg = require('../../assets/images/jeju.jpeg');
  let logo = require('../../assets/images/Logo.png'); 
  // const navigation = useNavigation();
  // const theme = useTheme();

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View 
        style={{
          width: '100%', 
          backgroundColor: 'white', 
          height: 44, 
          alignItems: 'center', 
          justifyContent:'center'}}
        >
          <Image source={logo} style={{width: 116, height: 38, resizeMode: 'contain'}} />
      </View>
      <ScrollView>
  
        <View style={{top: 0, width: '100%', height: 225}}>
          <Image source={jejuImg} style={styles.image} />
        </View>

        <Text style={styles.subTitle}>지구를 지키는 작은 실천</Text>
        <View style={styles.container}>

          {implementData.map((data, index) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate('Content', {data})}>
                <ImplementCard title={data.title} image={data.image} />
              </TouchableOpacity>
            )
          })}
        </View>

        <Text style={styles.subTitle}>환경이야기 보따리</Text>
        <View style={styles.container}>
          {implementData.map((data, index) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate('Content', {data})}>
                <ImplementCard title={data.title} image={data.image} />
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  subTitle: {
    color: "#48566A",
    fontSize: 20,
    fontWeight: 500,
    marginVertical: 15,
    paddingHorizontal: 18,
  },
  dataImage: {
    width: 160,
    height: 140,
    borderRadius: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: "space-around",
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});

export default Home;



