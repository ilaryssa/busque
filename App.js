import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicialPage from './pages/inicialPage/InicialPage';
import NoticeRegisterPage from './pages/noticeRegisterPage/NoticeRegisterPage';
import GoingRoutePage from './pages/goingRoutePage/GoingRoutePage';
import VoucherPage from './pages/voucherPage/VoucherPage';
import NoticeViewPage from './pages/noticeViewPage/NoticeViewPage';
import BackRoutePage from './pages/backRoutePage/BackRoutePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="NoticeView">
             {/*Sempre que quiser ir para uma página ou outra, muda a key aqui! Fica mais fácil.*/}
            <Stack.Screen name="Inicial" component={InicialPage} />
            <Stack.Screen name="Voucher" component={VoucherPage} />
            <Stack.Screen name="NoticeView" component={NoticeViewPage} />
            <Stack.Screen name="NoticeRegister" component={NoticeRegisterPage} />
            <Stack.Screen
              name="GoingRoute"
              component={GoingRoutePage}
              initialParams={{ busStop: 'Rodoviária' }}
            />
            <Stack.Screen
              name="BackRoute"
              component={BackRoutePage}
              initialParams={{ busStop: 'Lagoa' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffeee',
  },
});