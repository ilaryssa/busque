import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { View, Text } from "react-native";
import styles from "./style";

export default function InicialPage() {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>BUSQUE</Text>

            <Text style={styles.paragraph}>Acompanhe as rotas dos ônibus universitários de Quixadá em tempo real.</Text>
            
            <View style={styles.buttonsContainer}>
                <Button 
                onPress={() => console.log('Você é um estudante!')}
                mode='contained' 
                textColor='#003566' 
                buttonColor="#fffeee" 
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
                textColor='#fffeee' 
                labelStyle={{fontSize: 20}} 
                contentStyle={{padding: 10}} 
                style={{
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: '#fffeee',
                }}>
                    SOU MOTORISTA
                </Button>
            </View>
        </SafeAreaView>
    );
}
