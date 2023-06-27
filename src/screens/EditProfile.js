import {View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, StyleSheet, StatusBar} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const EditProfile = ({route, navigation}) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [inputText, setinputText] = useState('');
    const onPressSaveEdit = () => {

    }
 
    return (
        <SafeAreaView style={styles.container}>
            
            <StatusBar 
            barStyle = 'dark-content'
            hidden = {false}
            backgroundColor= 'white'>
            
            <View style={styles.seperator}>
            </View>
            {/* <View></View> */}
            {/* <View style={{ padding: 20, alignItems: 'center' }}>
                <Image
                source={profileImage}
                style={{ width: 80, height: 80,borderRadius: 100}}/>
            </View> */}
            <View
                style={{ padding: 10 }}>
            <View style={{ paddingVertical: 20 }}>
                <Text style={{
                    textAlign: 'center',
                    padding: 16,
                    fontSize: 16,
                    color: '#635B5B'
                }}>닉네임</Text>

                <TextInput
                    onChangeText={(text) => setinputText(text)}
                    defaultValue={inputText}
                    placeholder='홍길동'
                    editable={true}
                    multiline={false}
                    
                    style={{
                        width: 355,
                        height: 47,
                        left: 19,
                        // top: 372,
                        fontSize: 20,
                        backgroundColor: 'white',
                        borderColor: '#E2E2E2',
                        borderWidth: 1

                    
                    }}></TextInput>
                    
                    <Text style={{
                        
                        fontSize: 16,
                        textAlign: 'center',
                        color: '#1AAD55',
                        padding: 4
                    }}>
                        * 이미 존재하는 닉네임입니다.
                    </Text>
                    <View style={{ paddingVertical: 8 }}>
                <Text style={{
                    textAlign: 'center',
                    padding: 16,
                    fontSize: 16,
                    color: '#635B5B'
                }}>한줄 목표</Text>
                <TextInput
                    
                    placeholder='화이팅'
                    onChangeText={(text) => setinputText(text)}
                    defaultValue={inputText}
                    editable={true}
                    multiline={false}
                    
                    style={{
                        width: 355,
                        height: 47,
                        left: 19,
                        fontSize: 20,
                        backgroundColor: 'white',
                        borderColor: '#E2E2E2',
                        borderWidth: 1
                   
                    }}></TextInput>
                    </View>
             <TouchableOpacity
                onPress={() => onPressSaveEdit()}
                style={styles.button}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'white',
                        fontFamily: 'RobotoBold'
                      
                        
                        
                    }}>완료</Text>
                </TouchableOpacity>
            </View>
            </View>
            </StatusBar>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    button: {
        backgroundColor: '#0BE060',
        paddingHorizontal: 0,
        width: 390,
        height: 72,
        marginTop: 220,
        justifyContent: "center",
        alignItems: "center",
        
        },
    seperator: {
        marginHorizontal: 0,
        marginTop: 46,
        marginBottom: 47,
        borderBottomColor: '#CBCBCB',
        borderBottomWidth: 0.8

    }

    }
)

export default EditProfile;