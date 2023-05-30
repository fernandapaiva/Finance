import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// PAGES
import Welcome from './screens/Welcome';
import Home from './screens/Home';

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
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name='Tab' component={TabScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;