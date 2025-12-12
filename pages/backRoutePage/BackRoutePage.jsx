import CapacityButton from '../../components/capacityButton/CapacityButton'
import ConfirmButton from '../../components/confirmButton/ConfirmButton';
import { View } from "react-native";
import MyAppBar from '../../components/myAppBar/MyAppBar';
import { Text } from 'react-native-paper';

export default function BackRoutePage({busStop}) {
    return(
        <View style={{flex: 1, width:'100%', justifyContent:'center', backgroundColor: '#fffeee'}}>
            <MyAppBar/>
            <View>
                <Text style={{
                    textAlign:'center',
                    fontSize: 40,
                    color: '#003566',
                }}>{busStop}</Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#fffeee'
            }}>
                <ConfirmButton type='Confirmar parada' message={'Segue para o próximo ponto da rota de volta'}/>
            </View>

        </View>
    )
}