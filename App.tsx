import React from 'react';
import QueryProvider from './src/providers/QueryProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home} from './src/screens';
import {Settings} from './src/screens/Settings';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <QueryProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryProvider>
  );
};

export default App;
