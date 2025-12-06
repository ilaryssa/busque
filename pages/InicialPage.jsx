import { Button } from "react-native-paper";
import { View, Text } from "react-native";

export default function InicialPage() {
    return (
        <View style={{
            flex: 1, 
            flexDirection: 'column',
            backgroundColor: 'darkblue', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '100%',
            gap: 100,
            }}>

            <Text style={{
                textAlign: 'center',
                width: '80%',
                color: 'white', 
                fontSize: 80,
                paddingTop: 100,
                }}>
                BUSQUE
            </Text>

            <Text style={{
                textAlign: 'left',
                width: '80%',
                color: 'white', 
                fontSize: 30,
                }}>
                Acompanhe as rotas dos ônibus universitários de Quixadá em tempo real.
            </Text>
            
            <View style={{
                width: '80%',
                justifyContent: 'flex-end',
                margin: 100,
                gap: 20,
            }}>
                <Button 
                onPress={() => console.log('Você é um estudante!')}
                mode='contained' 
                textColor='darkblue' 
                buttonColor="white" 
                labelStyle={{fontSize: 20}} 
                contentStyle={{padding: 10}} 
                style={{
                    borderRadius: 30,
                }}>
                    SOU ESTUDANTE
                </Button>

                <Button 
                onPress={() => console.log('Você é um motorista!')}
                mode='outlined' 
                textColor='white' 
                labelStyle={{fontSize: 20}} 
                contentStyle={{padding: 10}} 
                style={{
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: 'white',
                }}>
                    SOU MOTORISTA
                </Button>
            </View>
        </View>
    );
}