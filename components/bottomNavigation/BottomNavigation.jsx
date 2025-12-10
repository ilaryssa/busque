import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './style';

const RotaRoute = () => <View />;

const DescontoRoute = () => <View />;

const AvisosRoute = () => <View />;

const MyComponent = () => { //mudar isso pq precisamos de props se quisermos mudar o botao na tela de motorista; juntamente com o texto e icon do botao tambem
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'rota', title: 'Rota', focusedIcon: 'car', unfocusedIcon: 'car-outline'},
    { key: 'desconto', title: 'Desconto', focusedIcon: 'tag', unfocusedIcon: 'tag-outline' },
    { key: 'avisos', title: 'Avisos', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    rota: RotaRoute,
    desconto: DescontoRoute,
    avisos: AvisosRoute
  });

return (
    <SafeAreaProvider
    style={styles.container}>
      {/* <Text
        style={styles.title}  
      >
        BUSQUE
      </Text> */}
                <BottomNavigation
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                />
        
    </SafeAreaProvider>
  );
};

export default MyComponent;