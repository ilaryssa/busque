
import { View, Text } from "react-native";
import MyAppBar from "../../../components/myAppBar/MyAppBar";
import RouteCard from "../../../components/routeCard/RouteCard";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DriverRoutePage() {
    const navigation = useNavigation();
    const route = useRoute();
    const { bus } = route.params;

    const stops = ['UFC', 'Lagoa', 'Geladão', 'Rodoviária'];

    function handleStartTrip() {
    navigation.navigate('GoingRoutePage', {
        bus,
        stops,
        currentStopIndex: 0,
    });
    }

    return(
        <View style={{flex: 1, backgroundColor: '#fffeee', }}>
            <MyAppBar title={'Rotas'} canGoBack='true' showProfile/>
            <View style={{alignItems: 'center', height: 450}}>
                <RouteCard 
                    variant='default'
                    title='UFC → Rodoviária'
                    bus='Ônibus A'
                    time='12:25'
                    completedStops={-1}
                    stops={['UFC', 'Lagoa', 'Geladão', 'Rodoviária']}
                    isDriver
                    status='next'
                    onStart={handleStartTrip}
                />
            </View>
        </View>
    );
}