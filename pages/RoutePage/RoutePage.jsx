
import { View, Text } from "react-native";
import MyCBottomNavigation from '../../components/bottomNavigation/BottomNavigation'
import MyAppBar from "../../components/myAppBar/MyAppBar";

export default function RoutePage() {
    
    return(
        <View>
            <MyAppBar title={'Rota'}/>
            <MyCBottomNavigation/>
        </View>
    );
}
