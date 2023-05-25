import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Logo = () => {
  let LogoImg = require('../../../assets/images/Logo.png');
  return (
    <View style={styles.logoContainer}>

        <View>
            <Image style={styles.logoImg} source={LogoImg} resizeMode='contain' />
        </View>

        <View style={styles.subTitle}>
            <Text>함께 뜻깊은</Text>
            <Text>플로깅 해볼까요?</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: '50%',
      },
      logoImg : {
        height: 60,
        width: 180,
      },
      subTitle:{
        alignItems: 'center',
        color: '#424242',
      },
});

export default Logo;