import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RotaRoute = () => <Text
style={{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
}}
>Rotas dos ônibus
</Text>;

const DescontoRoute = () => <Text
style={{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
}}
>Desconto</Text>;

const AvisosRoute = () => <Text
style={{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
}}
>Avisos
</Text>;

const MyComponent = () => {
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
    style={{
        flex:1,
        width: '100%',
    }}>
      <Text
        style={{
            textAlign: 'center',
            fontSize: 30,
            marginTop: 50,
            marginBottom: 20,
        }}  
      >
        BUSQUE
      </Text>
                <BottomNavigation
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                />
        
    </SafeAreaProvider>
);
};

export default MyComponent;