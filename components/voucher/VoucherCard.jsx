import { Button, Card, Text } from "react-native-paper";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VoucherCard() {
    return(
        <View style={{flex:1, width: '100%', alignItems:'center', marginTop: 50}}>
            <Card style={{backgroundColor: '#fffeee', borderColor: '#003566', borderWidth: 1, padding: 20, width: 360, borderRadius: 28}}>
                <Card.Content style={{alignItems:'center', gap:20, paddingBottom:20}}>
                    <Text variant="titleLarge" style={{fontWeight:'bold', fontSize:32, color: '#003566'}}>Perdeu o ônibus?</Text>
                    <Text style={{fontSize:20, color: '#003566'}}>Não se preocupe que temos a solução perfeita para você!</Text>
                    <Text style={{fontSize:20, color: '#003566'}}>Use o cupom <Text style={{fontWeight:'bold', color: '#003566'}}>BUSQUE20</Text> no app VrumVrum e ganhe <Text style={{fontWeight:'bold', color: '#003566'}}>20%</Text> de desconto na sua próxima corrida.</Text>

                </Card.Content>
                <Card.Actions>
                    <Button 
                    onPress={() => console.log('indo pro app... 🚶‍♂️‍➡️')} 
                    textColor="#fffeee"
                    labelStyle={{fontSize: 14, }}
                    style={{
                        backgroundColor: '#003566',
                        borderWidth: 0,
                    }}>Ir para o app</Button>
                </Card.Actions>
            </Card>
        </View>
    );
}