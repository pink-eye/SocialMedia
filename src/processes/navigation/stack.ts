import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/shared/config/navigation';

export const Stack = createNativeStackNavigator<RootStackParamList>();
