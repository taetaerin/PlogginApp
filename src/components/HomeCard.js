import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

let dimesion = (Dimensions.get('window').width);

const ImplementCard = ({image, title}) => {
  return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Image source={image} style={styles.itemImage}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
  )
}

export default ImplementCard

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        marginBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',

    },
    itemImage: {
        width: 160,
        height: 140,
        borderRadius: 2,
        marginBottom: 4,
    },
    item:{
        width: Platform.OS === 'ios' ? (dimesion / 2) - 30: (dimesion / 2) - 40,
        marginBottom: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: "#424242"
    }
})