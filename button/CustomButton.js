import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default function CustomButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    button:{
        borderRadius:15,
        paddingVertical:windowHeight*0.02,
        paddingHorizontal:windowWidth*0.05,
        backgroundColor:'#4630EB'
    },
    buttonText: {
        color:'#FFFFFF',
        fontWeight: 'bold',
        textTransform:'uppercase',
        fontSize:15,
        textAlign:'center'
    }
})
