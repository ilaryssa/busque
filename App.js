import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InicialPage from './pages/inicialPage/InicialPage';
import BottomNavigation from './components/bottomNavigation/BottomNavigation';
import NoticeRegisterPage from './pages/noticeRegisterPage/NoticeRegisterPage';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <BottomNavigation/> */}
      {/* <InicialPage/> */}
      <NoticeRegisterPage/>
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