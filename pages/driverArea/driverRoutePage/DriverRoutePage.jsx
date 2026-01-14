
import { View, Text } from "react-native";
import MyAppBar from "../../../components/myAppBar/MyAppBar";
import RouteCard from "../../../components/routeCard/RouteCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { startTrip } from "../../../src/api/routeService";

export default function DriverRoutePage() {
    const navigation = useNavigation();
    const route = useRoute();
    const { bus } = route.params;

    const stops = ['Rodoviária', 'Anexo', 'Constructec', 'Combate', 'UFC'];

    function handleStartTrip() {
        startTrip({ bus, routeType: 'ida' });
        navigation.navigate('GoingRoutePage', { stops, currentStopIndex: 0, });
    }

    return(
        <View style={{flex: 1, backgroundColor: '#fffeee', }}>
            <MyAppBar title={'Rotas'} canGoBack='true' showProfile/>
            <View style={{alignItems: 'center', height: 450}}>
                <RouteCard isDriver onStart={handleStartTrip} stops={stops} completedStops={0}/>
            </View>
        </View>
    );
}