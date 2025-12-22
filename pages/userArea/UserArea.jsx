import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import RoutePage from '../RoutePage/RoutePage';
import VoucherPage from '../voucherPage/VoucherPage';
import NoticeViewPage from '../noticeViewPage/NoticeViewPage';
import MyBottomNavigation from '../../components/bottomNavigation/BottomNavigation';

export default function UserArea() {
  const route = useRoute();

  const [currentTab, setCurrentTab] = useState('rota');

  return (
    <View style={{ flex: 1 }}>
      {currentTab === 'rota' && <RoutePage />}
      {currentTab === 'avisos' && <NoticeViewPage />}
      {currentTab === 'cupom' && <VoucherPage />}

      <MyBottomNavigation
        currentTab={currentTab}
        onChange={setCurrentTab}
      />
    </View>
  );
}
