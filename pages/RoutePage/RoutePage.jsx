
import { View, Text } from "react-native";
import MyCBottomNavigation from '../../components/bottomNavigation/BottomNavigation'
import MyAppBar from "../../components/myAppBar/MyAppBar";
import { useNavigation } from "@react-navigation/native";
import RouteCard from "../../components/routeCard/RouteCard";
import jsxRuntime from "react/jsx-runtime";
import RouteCarousel from '../../components/routeCarousel/RouteCarousel'

export default function RoutePage() {
    const navigation = useNavigation();
    return(
        <View style={{flex: 1, backgroundColor: '#fffeee', }}>
            <MyAppBar title={'Rota'} onBack={() => navigation.navigate('Inicial')} canGoBack='true'/>
            <View style={{alignItems: 'center', }}>
                <RouteCarousel/>
            </View>
        </View>
    );
}
