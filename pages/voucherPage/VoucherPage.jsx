import { View } from "react-native";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import VoucherCard from "../../components/voucher/VoucherCard";
import MyCBottomNavigation from "../../components/bottomNavigation/BottomNavigation";

export default function VoucherPage() {
    return(
        <View style={{flex:1, width: '100%', backgroundColor: '#fffeee'}}>
            <MyAppBar title={'Cupom'}/>
            <VoucherCard/>
        </View>
    );
}