import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import CryptoListScreen from '../screens/CryptoListScreen';
import RealTimeChartScreen from '../screens/RealTimeChartScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
          ) : (
            <>
              <Stack.Screen name="CryptoListScreen" component={CryptoListScreen} options={{ title: 'Crypto List' }} />
              <Stack.Screen name="RealTimeChartScreen" component={RealTimeChartScreen} options={{ title: 'Real-time Chart' }} />
            </>
          )}
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;