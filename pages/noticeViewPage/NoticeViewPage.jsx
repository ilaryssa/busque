import { View } from "react-native";
import NoticeViewCard from "../../components/noticeView/NoticeViewCard";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import MyCBottomNavigation from "../../components/bottomNavigation/BottomNavigation";

export default function NoticeViewPage() {
    return (
        <View style={{flex: 1, width: '100%', backgroundColor: '#fffeee'}}>
            <MyAppBar title={'Avisos'} showBack='false'/>
            <NoticeViewCard/>
        </View>
    )
}