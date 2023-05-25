import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// PAGES
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

// const Tab = useTab();

// const TabScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen name component />
//   </Tab.Navigator>
// );

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        {/* <Stack.Screen name='Tab' component={TabScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;