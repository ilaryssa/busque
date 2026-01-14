import CapacityButton from '../../components/capacityButton/CapacityButton'
import ConfirmButton from '../../components/confirmButton/ConfirmButton';
import { View } from "react-native";
import MyAppBar from '../../components/myAppBar/MyAppBar';
import { Text } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';

export default function GoingRoutePage() {
    const navigation = useNavigation();
    const route = useRoute();
    const {busStop} = route.params;
    
    return(
        <View style={{flex: 1, width:'100%', justifyContent:'center', backgroundColor: '#fffeee'}}>
            <MyAppBar onBack={() => navigation.goBack()} canGoBack='true'/>
            <View>
                <Text style={{
                    textAlign:'center',
                    fontSize: 40,
                    color: '#003566',
                }}>{busStop}</Text>
                <Text style={{
                    textAlign:'center',
                    alignSelf: 'center',
                    fontSize: 32,
                    color: 'grey',
                    paddingTop: 50,
                    width: '70%'
                }}>
                    Informe a lotação nessa parada
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#fffeee'
            }}>
                <CapacityButton type='Vazio'/>
                <CapacityButton type='Médio'/>
                <CapacityButton type='Lotado'/>
                <ConfirmButton type='Confirmar parada' message={'Segue para o próximo ponto da rota de ida'}/>
            </View>

        </View>
    )
}