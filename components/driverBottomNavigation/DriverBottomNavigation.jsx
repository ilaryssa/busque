import { BottomNavigation } from 'react-native-paper';

export default function DriverBottomNavigation({ currentTab, onChange }) {

  const routes = [
    { key: 'rota', title: 'Rota', focusedIcon: 'car', unfocusedIcon: 'car-outline' },
    { key: 'avisos', title: 'Avisos', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
    { key: 'sair', title: 'Sair', focusedIcon: 'logout',  },
  ]

  const index = routes.findIndex(r => r.key === currentTab);

  return (
    <BottomNavigation.Bar
      navigationState={{ index, routes }}
      onTabPress={({route}) => onChange(route.key)}
      activeColor="#fffeee"
      inactiveColor="#fffeee"
      activeIndicatorStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: '#003566'}}
    />
  );
};
