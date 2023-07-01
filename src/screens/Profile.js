import {View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, StyleSheet, StatusBar, ScrollView, Platform} from 'react-native'
import React, { useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons';
import {right} from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const Profile = ({navigation}) => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    const [inputText, setinputText] = useState('');
    
    const onPressSaveEdit = () => {
    }
    const[selectImage, setSelectImage] = useState('');
    const markDates = {
        '2023-07-01': {
            selected: true,
        },
        '2023-07-02': {
            selected: true,
        },
        '2023-07-03': {
            selected: true,
        }
    };
 
    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView> 
            {/* <StatusBar 
            barStyle = 'dark-content'
            hidden = {false}
            backgroundColor= 'white'> */}
            <Text style={styles.subTitle}>
                프로필
            </Text>
            <View style={styles.seperator}>
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row'}}>
                        <Image style={{backgroundColor: '#EFEFEF',
                        left: 16, width: 100, height: 100, borderRadius: 100}}source={{uri: selectImage}}></Image>
                        
            <Text style={styles.nameText}>
                홍길동 님
            </Text>
            </View>
            <View style={{
                paddingBottom: 30
            }}></View>
            <View style={styles.seperator}>
            </View>
            <Text style={styles.subTitle}>
                플로깅 기록
            </Text>
            <View>
                <Calendar
                 style={styles.calendar}
                 markedDates={markDates}
                 theme={{
                    selectedDayBackgroundColor: '#0BE060',
                    arrowColor: '#0BE060',
                    dotColor: '#0BE060',
                    todayTextColor: '#0BE060',
                 }}
                ></Calendar>
            </View>
            <View style={{marginTop: 26, width:375, height: 75, backgroundColor: '#E4EAF1', left: 18, borderRadius: 5}}>
                 <Text style={styles.text}>거리:</Text>
                 <Text style={styles.text}>시간:</Text>
                 <Text style={styles.text}>칼로리:</Text>
            </View>
            <View style={{
                marginBottom: 110
            }}></View>
             <TouchableOpacity
                onPress={() => onPressSaveEdit()}>
            <Text style={styles.text}>
                내가 작성한 게시물
            </Text>
            {/* <Ionic name= "chevron-small-right" size={20} color="#CBCBCB" /> */}
            </TouchableOpacity>
            <View style={styles.line}>
            </View>
            <TouchableOpacity
                onPress={() => onPressSaveEdit()}>
            <Text style={styles.text}>
            내가 작성한 모집글
            </Text>
            {/* <Ionic name= "right" color='#CBCBCB' size={20}/> */}
            </TouchableOpacity>
            <View style={styles.line}>
            </View>
            <TouchableOpacity
                onPress={() => onPressSaveEdit()}>
            <Text style={styles.text}>
                내가 참여한 모집글
            </Text>
            </TouchableOpacity>
            <View style={styles.line}>
            </View>
            <TouchableOpacity
                // onPress={() => onPressSaveEdit()}
                onPress={() => navigation.push('EditProfile')} >
                
                <Text style={styles.text}>
                    프로필 관리
                </Text>
            </TouchableOpacity>
            <View style={{
                marginBottom:80
            }}></View>

            <View style={{marginBottom: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center'}}>
            <Text style={{
                fontSize: 14,
                color: '#A5A5A5'
            }}>
                로그아웃  |
            </Text>
                <Image style={{
                    marginLeft:7,
                    width:56,
                    height:14,
                    resizeMode:'contain'                 
                }}source={require('../../assets/images/Logo.png')}/>
            </View>
          </ScrollView>
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#F5F5F5'
    },
    seperator: {
        marginHorizontal: 0,
        marginTop: 12,
        marginBottom: 30,
        borderBottomColor: '#CBCBCB',
        borderBottomWidth: 0.8,
    },
    line: {
        marginHorizontal: 0,
        marginTop: 19,
        marginBottom: 19,
        borderBottomColor: '#CBCBCB',
        borderBottomWidth: 0.8
        
    },
    nameText: {
        fontSize: 20,
        fontFamily: 'Inter',
        left: 45,
        top:15,
        color: '#424242',
       
    },
    subTitle: {
        fontSize: 18,
        left: 18,
        color: '#424242'
    },
    text: {
        fontSize: 16,
        left: 18,
        color: '#424242'
    },
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderRadius: 5,
        marginTop: 33,
        width: 375,
        padding: 10, 
        left:18,   
    }
    
}
)

export default Profile;