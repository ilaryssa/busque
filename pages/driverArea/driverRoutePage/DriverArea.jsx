import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DriverBottomNavigation from '../../../components/driverBottomNavigation/DriverBottomNavigation';
import DriverRoutePage from './DriverRoutePage';
import NoticeRegisterPage from '../../noticeRegisterPage/NoticeRegisterPage';
import AlertChoice from '../../../components/alertChoice/AlertChoice';

export default function DriverArea() {
  const navigation = useNavigation();

  const [currentTab, setCurrentTab] = useState('rota');
  const [showExitAlert, setShowExitAlert] = useState(false);

  function handleTabChange(tab) {
    if (tab === 'sair') {
      setShowExitAlert(true);
      return;
    }

    setCurrentTab(tab);
  }

  return (
    <View style={{ flex: 1 }}>
      {currentTab === 'rota' && <DriverRoutePage />}
      {currentTab === 'avisos' && <NoticeRegisterPage />}

      <DriverBottomNavigation
        currentTab={currentTab}
        onChange={handleTabChange}
      />

      <AlertChoice
        visible={showExitAlert}
        onCancel={() => setShowExitAlert(false)}
        onConfirm={() => {
          setShowExitAlert(false);
          navigation.replace('Inicial');
        }}
      />
    </View>
  );
}
