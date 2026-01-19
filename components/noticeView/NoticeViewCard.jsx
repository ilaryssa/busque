import { Button, Card, Text } from "react-native-paper";
import { View } from "react-native";

export default function NoticeViewCard({busId, hour, message}) {
    return(
        <View style={{flex:1, width: '100%', alignItems:'center', marginTop: 50}}>
            <View style={{flexDirection: "row", justifyContent:'space-between', width:'80%', }}>
                <Text style={{fontSize: 15, color: '#003566'}}>Motorista do ônibus {busId}</Text>
                <Text style={{fontSize: 15, color: '#003566'}}>{hour}</Text>
            </View>
            <Card style={{backgroundColor: '#fffeee', borderColor: '#003566', borderWidth: 1, margin: 10, width: 360, borderRadius: 28}}>
                <Card.Content style={{alignItems:'left', gap:20, paddingBottom:20}}>
                    <Text style={{fontSize: 20, color: '#003566'}}>{message}</Text>

                </Card.Content>
            </Card>
        </View>
    ) 
}