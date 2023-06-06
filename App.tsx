import React from 'react';
import QueryProvider from './src/providers/QueryProvider';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home} from './src/screens';
import {Settings} from './src/screens/Settings';
import {useFlipper} from '@react-navigation/devtools';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

const App = () => {
  const navigationRef = useNavigationContainerRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  __DEV__ && useFlipper(navigationRef);

  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <QueryProvider>
      <NavigationContainer ref={navigationRef}>
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
