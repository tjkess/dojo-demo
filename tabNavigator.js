import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from './user';
import LoginScreen from './loginScreen';
import Account from './account';
import { useSelector } from 'react-redux';

const TabNavigator = () => {

  const state = useSelector(s => s.main);

  if(!state.authenticated) {
    return <LoginScreen />;
  }

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"user"} component={User}/>
        <Tab.Screen name={"account"} component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;