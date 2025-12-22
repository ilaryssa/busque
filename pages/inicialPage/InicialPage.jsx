import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { View, Text, Image } from "react-native";
import styles from "./style";
import {useNavigation} from '@react-navigation/native';
import LoginPage from '../loginPage/LoginPage';

export default function InicialPage() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            {/* <Text style={styles.title}>BUSQUE</Text> */}
            <Image source={require('../../assets/logo.png')} style={{height: 200, width: 250, justifyContent: 'flex-start',}}/>

            <Text style={styles.paragraph}>Acompanhe as rotas dos ônibus universitários de Quixadá em tempo real.</Text>
            
            <View style={styles.buttonsContainer}>
                <Button 
                onPress={() => navigation.navigate('UserArea')}
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
                onPress={() => navigation.navigate('Login')}
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
