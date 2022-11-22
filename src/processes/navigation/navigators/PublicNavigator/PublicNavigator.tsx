import { Login } from '@/pages/Login';
import { SignUp } from '@/pages/SignUp';
import { Welcome } from '@/pages/Welcome';
import { Stack } from '../../stack';

interface Props {}

export const PublicNavigator = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
