import { BottomNavigation } from 'react-native-paper';

export default function MyCBottomNavigation({ currentTab, onChange }) {

  const routes = [
    { key: 'rota', name: 'RoutePage', title: 'Rota', focusedIcon: 'car', unfocusedIcon: 'car-outline' },
    { key: 'cupom', name: 'Voucher', title: 'Cupom', focusedIcon: 'tag', unfocusedIcon: 'tag-outline' },
    { key: 'avisos', name: 'NoticeView', title: 'Avisos', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
  ]

  const index = routes.findIndex(r => r.key === currentTab);

  return (
    <BottomNavigation.Bar
      navigationState={{ index, routes }}
      onTabPress={({route}) => onChange(route.key)}
      activeColor="#fffeee"
      inactiveColor="#fffeee"
      activeIndicatorStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: '#003566' }}
    />
  );
};
