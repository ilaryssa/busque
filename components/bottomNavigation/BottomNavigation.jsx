import React, { useMemo, useCallback, useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MyCBottomNavigation = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  const routes = useMemo(
    () => [
      { key: 'rota', name: 'RoutePage', title: 'Rota', focusedIcon: 'car', unfocusedIcon: 'car-outline' },
      { key: 'cupom', name: 'Voucher', title: 'Cupom', focusedIcon: 'tag', unfocusedIcon: 'tag-outline' },
      { key: 'avisos', name: 'NoticeView', title: 'Avisos', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
    ],
    []
  );

  const handleTabPress = useCallback(
    ({ route, preventDefault }) => {
      // Prevent the default BottomNavigation behavior so we control the index
      if (typeof preventDefault === 'function') {
        preventDefault();
      }

      // Keep local index in sync and then navigate
      const newIndex = routes.findIndex(r => r.key === route.key);
      if (newIndex !== 1) {
        setIndex(newIndex);
      }

      if (route.name) {
        navigation.navigate(route.name);
      }
    },
    [navigation, routes]
  );

  return (
    <BottomNavigation.Bar
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={() => null}
      onTabPress={handleTabPress}
      activeColor="#fffeee"
      inactiveColor="#fffeee"
      activeIndicatorStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: '#003566' }}
    />
  );
};

export default MyCBottomNavigation;
