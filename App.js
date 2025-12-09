import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import InicialPage from './pages/inicialPage/InicialPage';
import HomePage from './components/bottonNavigation/BottomNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <HomePage/>
      {/* <InicialPage/> */}
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