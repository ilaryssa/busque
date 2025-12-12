import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InicialPage from './pages/inicialPage/InicialPage';
import MyCBottomNavigation from './components/bottomNavigation/BottomNavigation';
import NoticeRegisterPage from './pages/noticeRegisterPage/NoticeRegisterPage';
import InputNotice from './components/inputNotice/InputNotice';
import GoingRoutePage from './pages/goingRoutePage/GoingRoutePage';
import VoucherPage from './pages/voucherPage/VoucherPage';
import NoticeViewPage from './pages/noticeViewPage/NoticeViewPage';
import BackRoutePage from './pages/backRoutePage/BackRoutePage';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <InicialPage/> */}
      {/* <VoucherPage/> */}
      {/* <NoticeViewPage/> */}
      {/* <NoticeRegisterPage/> */}
      {/* <GoingRoutePage busStop={'Rodoviária'}/> */}
      {/* <BackRoutePage busStop={'Lagoa'}/> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffeee'
  },
});