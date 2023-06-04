import { View, Text,  StyleSheet, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, { useState } from 'react';
import Logo from '../components/SignComponent/Logo';
import { useNavigation } from '@react-navigation/native';
import CustomerInput from '../components/SignComponent/CustomerInput';
import FindText from '../components/SignComponent/FindText';



const SignIn = () => {

  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  console.log('userid', userid);
  console.log('password', password);
  const navigation = useNavigation();


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      
      {/* <Logo /> */}


      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          {/* 로고 컴포넌트 */}
          <Logo />

          {/* 로그인 컴포넌트 */}
          <CustomerInput 
              value={userid} 
              setValue={setUserId} 
              autoCapitalize = 'none'
              placeholder='아이디' name='person-outline'
          />

          {/* 비밀번호 컴포넌트 */}
          <CustomerInput 
              value={password} 
              setValue={setPassword} 
              secureTextEntry={true}
              placeholder='비밀번호' name='ios-lock-closed-outline' 
          />

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
    inputContainer: {
      width: '100%',
      height: 47,
      marginBottom: 6,
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      paddingHorizontal: 16,
  },

    inputContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    inputIcon: {
      fontSize: 16, 
      color: '#828282', 
      marginRight: 16,
    },

    inputText: {
      fontSize: 14,
      width: '70%',
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