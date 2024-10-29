import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/navigation';
import CalculadorasScreen from './src/screens/home/homeScreen';
import Arranjo from './src/screens/Arranjo/ArranjoScreen';
import Combinacao from './src/screens/Combinação/CombinacaoScreen';
import PermutacaoSimples from './src/screens/permutacao/Permutacao';
import ArranjoComposto from './src/screens/ArranjoComposto/ArranjoComposto';
import Information from './src/screens/Info/Information';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CalculadorasScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Arranjo" component={Arranjo} options={{ headerShown: false }}/>
      <Stack.Screen name="ArranjoComposto" component={ArranjoComposto} options={{ headerShown: false }}/>
      <Stack.Screen name="Permutacao" component={PermutacaoSimples} options={{ headerShown: false }}/>
      <Stack.Screen name="Combinacao" component={Combinacao} options={{ headerShown: false }}/>
      <Stack.Screen name="Information" component={Information} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

