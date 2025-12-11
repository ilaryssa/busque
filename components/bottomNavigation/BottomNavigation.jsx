import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './style';

const MyCBottomNavigation = () => { 
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'rota', title: 'Rota', focusedIcon: 'car', unfocusedIcon: 'car-outline'},
    { key: 'cupom', title: 'Cupom', focusedIcon: 'tag', unfocusedIcon: 'tag-outline' },
    { key: 'avisos', title: 'Avisos', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
  ]);

return (
    <BottomNavigation.Bar
        navigationState={{ index, routes }}
        // onIndexChange={setIndex}
        // renderScene={() => null}
        onTabPress={({ route }) => {
          const newIndex = routes.findIndex((r) => r.key === route.key);
          if (newIndex !== -1) {
            setIndex(newIndex);
          }
        }}
        activeColor='#fffeee'
        inactiveColor='#fffeee'
        activeIndicatorStyle={{ backgroundColor: 'transparent' }}
        style={{backgroundColor: '#003566'}}
    />
  );
};

export default MyCBottomNavigation;
