import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const FindText = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.findContent}>
        <Text style={styles.findText}>아이디찾기</Text>
        <View style={styles.line}></View>
        <Text style={styles.findText}>비밀번호 찾기</Text>
        <Text style={styles.line}></Text>
        <Text style={styles.findText} onPress={() => navigation.navigate('SignUp')}>회원가입</Text>
    </View>  
  );
};

const styles = StyleSheet.create({
    findContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        backgroundColor: 'orange',
        padding: 1,
        width: '100%',
      },
  
    findContent : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 12,
    },

    findText: {
        color: '#f424242',
        fontSize: 14,
        marginRight: 16,
        opacity: 0.75,
    },

    line: {
        backgroundColor: 'black',
        marginRight: 16,
        width: 1,
        height: 14,
        opacity: 0.3,
    },
});

export default FindText;