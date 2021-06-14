import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Grupo914.png')} style={{width: 80, height: 51}}/>
            <View style={styles.titleBox}>
                <Text style={styles.textLight}>Welcome to</Text>
                <Text style={styles.textBold}>Bowhead's</Text>
            </View>
            <Image source={require('../../assets/images/Grupo1509.png')} style={{width: 303, height: 252}}/>
            <Text style={styles.title}>Wellness logger</Text>
            <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('CreatePassword')}>
                <Text style={styles.textButton}>Start</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleBox: {
        paddingVertical: 10
    },
    textLight: {
        fontSize: 25,
        textAlign: 'center'
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 30
    },
    title: {
        paddingTop: 20,
        paddingBottom: 30,
        fontSize: 28,
    },
    buttonBox: {
        width: 273,
        height: 66,
        backgroundColor: '#209CB3',
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 20
    },
    textButton: {
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#FFF'
    }
})

export default Welcome