import LoginScreen from "./login";
import React from "react";
import HomeScreen from "./home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const NavigationApp = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default NavigationApp