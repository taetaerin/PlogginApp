import { View, Text,  StyleSheet, TextInput,  Pressable, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback, Keyboard, Button, } from 'react-native';
import React, { useState } from 'react';
import Logo from '../components/SignComponent/Logo';
import { useNavigation } from '@react-navigation/native';
import CustomerInput from '../components/SignComponent/CustomerInput';
import FindText from '../components/SignComponent/FindText';

const SignIn = () => {
  // const {height} = useWindowDimensions();

  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');

  const navigation = useNavigation();


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          {/* 로고 컴포넌트 */}
          <Logo />

          {/* 로그인 / 비밀번호 컴포넌트 */}
          <CustomerInput placeholder='로그인' name='person-outline' />
          <CustomerInput placeholder='비밀번호' name='ios-lock-closed-outline' />

          {/* 로그인 버튼  */}
          <Pressable onPress={() => navigation.replace('Main')} style={[styles.signBtn]}>
              <Text style={styles.btnText}>로그인</Text>
          </Pressable>

          
          <FindText />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)};
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FBFBFB',
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    signBtn: {
      backgroundColor: '#0BE060',
      alignItems: 'center',
      borderWidth: 0,
      marginTop: 10,
      width: '100%',
      height: 47,
      marginBottom: 6,
      justifyContent: 'center',
      border: 0,
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      paddingHorizontal: 16,
    },
    
    btnText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default SignIn;