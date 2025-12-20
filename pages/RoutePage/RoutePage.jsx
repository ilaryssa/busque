
import { View, Text } from "react-native";
import MyCBottomNavigation from '../../components/bottomNavigation/BottomNavigation'
import MyAppBar from "../../components/myAppBar/MyAppBar";
import { useNavigation } from "@react-navigation/native";

export default function RoutePage() {
    const navigation = useNavigation();
    return(
        <View>
            <MyAppBar title={'Rota'} onBack={() => navigation.navigate('Inicial')} canGoBack='true'/>
        </View>
    );
}
