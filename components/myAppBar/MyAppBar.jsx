import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyAppBar() {
    return(
        <Appbar.Header style={{backgroundColor: 'white'}}>
            <Appbar.BackAction color='#003566' onPress={() => alert('votlando a pagina')}/>
            <Appbar.Content title="Avisos" color='#003566' style={{}}/>
            {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        </Appbar.Header>
    );
}