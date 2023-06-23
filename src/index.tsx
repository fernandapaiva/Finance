import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// PAGES
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Finance from './screens/Finance';
import Calendar from './screens/Calendar';
import Settings from './screens/Settings';
import { BackgroundGrey } from './screens/Welcome/styles';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={
      {headerShown: false}
      }>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Finance" component={Finance} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

// const Tab = useTab();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name='BottomTab' component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;