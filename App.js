import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InicialPage from './pages/inicialPage/InicialPage';
import MyCBottomNavigation from './components/bottomNavigation/BottomNavigation';
import NoticeRegisterPage from './pages/noticeRegisterPage/NoticeRegisterPage';
import InputNotice from './components/inputNotice/InputNotice';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <MyCBottomNavigation/> */}
      {/* <InicialPage/> */}
      <NoticeRegisterPage/>
      {/* <InputNotice/> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});