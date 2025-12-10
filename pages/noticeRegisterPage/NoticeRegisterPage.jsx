import { SafeAreaView, } from "react-native-safe-area-context";
import { View } from "react-native";
import InputNotice from "../../components/inputNotice/InputNotice";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import BottomNavigation from '../../components/bottomNavigation/BottomNavigation'
import styles from "./style";

export default function NoticeRegisterPage() {
    return(
        <View style={styles.container}> {/*nao da pra usar safe area com alguns dos componentes paper */}
            <MyAppBar/>
            <InputNotice/>
            <BottomNavigation/> {/* isso daqui ta dando conflito com a cor da tela, nao sei o que exlcuir; talvez precise refazer */}
        </View>
    );
}