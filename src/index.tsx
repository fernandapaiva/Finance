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
import Scan from './screens/Scan';


/// ICONS
import HomeIcon from './assets/Home';
import BriefCase from './assets/BriefCase';
import CalendarIcon from './assets/Calendar';
import SettingsIcon from './assets/Settings';
import ButtonScan from './components/Button';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown: false, 
      tabBarStyle: {backgroundColor: '#ffffff', borderTopColor: '#fafafa'},
    }}
    >

      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({focused}) => <HomeIcon color={focused ? '#5F59E1' : ''} />
       }}
      />

      <Tab.Screen 
      name="Calendar" 
      component={Calendar} 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({focused}) => <CalendarIcon color={focused ? '#5F59E1' : ''}/>
       }}/>

      <Tab.Screen 
      name="Scan" 
      component={Scan} 
      options={{
        tabBarLabel: '',
        tabBarIcon: () => <ButtonScan />
       }}
       />

      <Tab.Screen 
      name="Finance" 
      component={Finance}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({focused}) => <BriefCase color={focused ? '#5F59E1' : ''}/>
       }}
      />

      <Tab.Screen
       name="Settings" 
       component={Settings}
       options={{
        tabBarLabel: '',
        tabBarIcon: ({focused}) => <SettingsIcon color={focused ? '#5F59E1' : ''}/>
       }}
       />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

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