import { Appbar } from "react-native-paper";

export default function MyAppBar({title}) {
    return(
        <Appbar.Header style={{backgroundColor: '#fffeee'}}>
            <Appbar.BackAction color='#003566' onPress={() => alert('votlando a pagina')}/>
            <Appbar.Content title={title} color='#003566' style={{paddingLeft: '27%'}}/>
            {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        </Appbar.Header>
    );
}