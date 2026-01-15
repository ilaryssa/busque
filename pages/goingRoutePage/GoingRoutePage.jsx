import { View } from "react-native";
import MyAppBar from '../../components/myAppBar/MyAppBar';
import { Text } from 'react-native-paper';
import { useNavigation, useRoute } from "@react-navigation/native";
import CapacityButton from '../../components/capacityButton/CapacityButton';
import ConfirmButton from '../../components/confirmButton/ConfirmButton';
import { useState } from "react";
import AlertChoice from "../../components/alertChoice/AlertChoice";

export default function GoingRoutePage() {
  const navigation = useNavigation();
  const route = useRoute();
  const [showExitAlert, setShowExitAlert] = useState(false);

  const { bus, stops = [], currentStopIndex = 0 } = route.params;
  const busStop = stops?.[currentStopIndex] ?? 'Carregando...';
  const isLastStop = currentStopIndex >= stops.length - 1;
  const isFirstStop = currentStopIndex === 0;

  function handleConfirmStop() {
    // (opcional) aqui você salva no "db" que confirmou essa parada

    if (isLastStop) {
        navigation.navigate('DriverArea', {
            screen: 'DriverRoutePage', // ou o name real dessa screen no stack do motorista
            params: { bus },
        });
        return;
    }
  navigation.replace('GoingRoutePage', {
    bus,
    stops,
    currentStopIndex: currentStopIndex + 1,
  });
  }

  return (
    <View style={{flex: 1, width:'100%', justifyContent:'center', backgroundColor: '#fffeee'}}>
      <MyAppBar onBack={isFirstStop ? () => setShowExitAlert(true) : undefined} canGoBack={isLastStop}/>

      <View>
        <Text style={{ textAlign:'center', fontSize: 40, color: '#003566' }}>
          {busStop}
        </Text>

        {/* <Text style={{
          textAlign:'center',
          alignSelf: 'center',
          fontSize: 32,
          color: 'grey',
          paddingTop: 50,
          width: '70%'
        }}>
          Informe a lotação nessa parada
        </Text> */}
      </View>

      <View style={{ flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#fffeee' }}>
        {/* <CapacityButton type='Vazio'/>
        <CapacityButton type='Médio'/>
        <CapacityButton type='Lotado'/> */}

        <ConfirmButton
          type={isLastStop ? 'Finalizar viagem' : 'Confirmar parada'}
          message={isLastStop ? 'Viagem finalizada' : 'Segue para o próximo ponto'}
          onPress={handleConfirmStop}   // <<< precisa existir no ConfirmButton
        />
      </View>

      <AlertChoice
        visible={showExitAlert}
        message={'Se você voltar a rota não será iniciada. \n Deseja voltar mesmo assim?'}
        onCancel={() => setShowExitAlert(false)}
        onConfirm={() => {
            setShowExitAlert(false);
            navigation.goBack(); // agora sim sai
        }}
        />
    </View>
  );
}
