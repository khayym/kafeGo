import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import Navigator from './Navigator';

const Stack = createNativeStackNavigator();
const Router = () => {
  const fistOpenApp = false;
  return (
    <NavigationContainer>
      {fistOpenApp ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      ) : (
        <Navigator />
      )}
    </NavigationContainer>
  );
};

export default Router;
