import 'react-native-gesture-handler';
import React from 'react';

// Utils
import { COLORS } from '../utils/Constants'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Views
import Welcome from '../views/Welcome'

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen 
                    name='Welcome'
                    component={Welcome}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
