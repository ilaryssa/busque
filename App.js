import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import React from 'react';

import InicialPage from './pages/inicialPage/InicialPage';
import NoticeRegisterPage from './pages/noticeRegisterPage/NoticeRegisterPage';
import RoutePage from './pages/RoutePage/RoutePage';
import VoucherPage from './pages/voucherPage/VoucherPage';
import NoticeViewPage from './pages/noticeViewPage/NoticeViewPage';
import UserArea from './pages/userArea/UserArea';
import LoginPage from './pages/loginPage/LoginPage';
import DriverRoutePage from './pages/driverArea/driverRoutePage/DriverRoutePage';
import DriverArea from './pages/driverArea/driverRoutePage/DriverArea';
import GoingRoutePage from './pages/goingRoutePage/GoingRoutePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicial" component={InicialPage} />
          <Stack.Screen name="UserArea" component={UserArea} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="DriverArea" component={DriverArea} />
          <Stack.Screen name="GoingRoutePage" component={GoingRoutePage} />
          
        </Stack.Navigator>
        {/* <GoingRoutePage busStop={'Rodoviária'} onBack/> */}

      </NavigationContainer>
    </SafeAreaProvider>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffeee',
  },
});