
import { View, Text } from "react-native";
import MyAppBar from "../../../components/myAppBar/MyAppBar";
import RouteCard from "../../../components/routeCard/RouteCard";
import { useNavigation } from "@react-navigation/native";

export default function DriverRoutePage() {
    const navigation = useNavigation();

    return(
        <View style={{flex: 1, backgroundColor: '#fffeee', }}>
            <MyAppBar title={'Rotas'} canGoBack='true' showProfile/>
            <View style={{alignItems: 'center', height: 450}}>
                <RouteCard variant='active' isDriver onStart={() => navigation.navigate("DrivingRoute")}/>
            </View>
        </View>
    );
}