import {View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, StyleSheet, StatusBar, ScrollView, Platform} from 'react-native'
import React, { useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons';
import {right} from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const Profile = ({navigation}) => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    const [inputText, setinputText] = useState('');

    const onPressSaveEdit = () => {
    }
 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {/* <StatusBar 
            barStyle = 'dark-content'
            hidden = {false}
            backgroundColor= 'white'> */}
            <Text style={{
                fontSize: 18,
                fontFamily: 'Inter',
                left: 18,
                color: '#424242'
                                
            }}>프로필</Text>
            <View style={styles.seperator}>
            </View>
             {/* <View></View> */}
            {/* <View style={{ padding: 20, alignItems: 'center' }}>
                <Image
                source={profileImage}
                style={{ width: 80, height: 80,borderRadius: 100}}/>
            </View> */}
            <Text style={{
                fontSize: 20,
                fontFamily: 'Inter',
                left: 138,
                color: '#424242'
            }}>홍길동 님</Text>
            <View style={{
                paddingBottom: 58
            }}></View>
            <View style={styles.seperator}>
            </View>
            <Text style={{
                fontSize: 18,
                // fontFamily: 'Inter',
                left: 18,
                color: '#424242'}}>플로깅 기록</Text>
            <View></View>
            <View style={{
                marginBottom: 380
            }}></View>
             <TouchableOpacity
                onPress={() => onPressSaveEdit()}>
            <Text style={{
                fontSize: 16,
                left: 18,
                color: '#424242'
                // top: 802
            }}>
                내가 작성한 게시물
            </Text>
            {/* <Ionic name= 'right' color='#CBCBCB' size={20}/> */}
            </TouchableOpacity>
            <View style={styles.line}
            ></View>
            <TouchableOpacity
                onPress={() => onPressSaveEdit()}>
            <Text style={{
                fontSize: 16,
                left: 18,
                color: '#424242'
                // top: 802
            }}>
                내가 작성한 모집글
            </Text>
            {/* <Ionic name= {right} color='#CBCBCB' size={20}/> */}
            </TouchableOpacity>
            <View style={styles.line}
            ></View>
            <TouchableOpacity
                onPress={() => onPressSaveEdit()}>
            <Text style={{
                fontSize: 16,
                left: 18,
                color: '#424242'
                // top: 802
            }}>
                내가 참여한 모집글
            </Text>
            </TouchableOpacity>
            <View style={styles.line}
            ></View>
            <TouchableOpacity
                // onPress={() => onPressSaveEdit()}
                onPress={() => navigation.push('EditProfile')} >
                
                <Text style={{
                    fontSize: 16,
                    left: 18,
                    color: '#424242'
                    // top: 802
                }}>
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
         
            {/* </StatusBar> */}
          </ScrollView>
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    seperator: {
        marginHorizontal: 0,
        marginTop: 12,
        marginBottom: 47,
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
    
}
)

export default Profile;