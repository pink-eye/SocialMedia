import { Main } from '@/pages/Main';
import { Stack } from '../../stack';

interface Props {}

export const PrivateNavigator = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};
