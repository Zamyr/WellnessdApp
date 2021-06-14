import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const CreatePassword = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.centerContent, {flex: .8, }]}>
                <View style={[styles.centerContent, {flex: 1}]}>
                    <Image source={require('../../assets/images/Grupo1509.png')} style={{width: 303, height: 252}}/>
                    <Text style={styles.title}>Create a Password</Text>
                    <View>
                        <TextInput 
                            style={styles.input} 
                            placeholder='Password'
                            password={true}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={[styles.centerContent, {flex: .2}]}>
                    <TouchableOpacity style={styles.buttonBox} onPress={() => console.log('lol')}>
                        <Text style={styles.textButton}>Lest Go!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerContent: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        paddingTop: 20,
        paddingBottom: 30,
        fontSize: 25,
        fontWeight: '600'
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
    },
    input: {
        height: 54,
        width: 372,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'lightgray',
        paddingLeft: 10
    },
})

export default CreatePassword