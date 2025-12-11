import { SafeAreaView, } from "react-native-safe-area-context";
import { View } from "react-native";
import InputNotice from "../../components/inputNotice/InputNotice";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import MyCBottomNavigation from '../../components/bottomNavigation/BottomNavigation'
import styles from "./style";

export default function NoticeRegisterPage() {
    return(
        <View style={styles.container}> 
            <MyAppBar/>
            <InputNotice/>
            <MyCBottomNavigation/>
        </View>
    );
}