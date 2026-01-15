import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import { Button, RadioButton, TextInput } from "react-native-paper";

export default function LoginPage({navigation}) {
    const [bus, setBus] = useState(null);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, backgroundColor: '#003566', gap: 50}}>
            <MyAppBar
                title='Entrar'
                backgroundColor="#003566"
                titleColor="#fffeee"
                onBack={() => navigation.goBack()}
            />

            <View style={{gap: 30}}>
                <Text style={{fontSize: 20, color: '#fffeee', paddingHorizontal: 50, fontWeight: 'bold'}}>
                    Área exclusiva para motoristas.
                </Text>
                <Text style={{fontSize: 20, color: '#fffeee', paddingHorizontal: 50, }}>
                    Se você é estudante, por favor retorne para a tela inicial e selecione a opção "Sou esudante".
                </Text>

                <TextInput
                    label='E-mail'
                    mode="outlined"
                    style={{backgroundColor: '#003566', width: '80%', alignSelf: 'center', marginTop: 50, }}
                    textColor="#fffeee"
                    outlineColor="#fffeee"
                    activeOutlineColor="#fffeee"
                    placeholderTextColor='red'
                    theme={{
                        colors: {
                        onSurfaceVariant: '#fffeee50', // cor do label quando NÃO focado
                        primary: '#fffeee',          // cor do label quando focado
                        },
                    }}
                />
                <TextInput
                    label='Senha'
                    mode="outlined"
                    secureTextEntry
                    style={{backgroundColor: '#003566', width: '80%', alignSelf: 'center', }}
                    textColor="#fffeee"
                    outlineColor="#fffeee"
                    activeOutlineColor="#fffeee"
                    placeholderTextColor='red'
                    theme={{
                        colors: {
                        onSurfaceVariant: '#fffeee50', // cor do label quando NÃO focado
                        primary: '#fffeee',          // cor do label quando focado
                        },
                    }}
                />

                <Text style={{fontSize: 20, color: '#fffeee', paddingHorizontal: 50, }}>
                    Informe qual ônibus você está dirigindo
                </Text>
                <RadioButton.Group
                    onValueChange={value => setBus(value)}
                    value={bus}
                >
                    <View style={{ flexDirection: 'row', gap: 50, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="A" color="#fffeee" uncheckedColor='#fffeee'/>
                        <Text style={{ color: '#fffeee', fontSize: 20 }}>Ônibus A</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="B" color="#fffeee" uncheckedColor='#fffeee'/>
                        <Text style={{ color: '#fffeee', fontSize: 20 }}>Ônibus B</Text>
                    </View>
                    </View>
                </RadioButton.Group>
            </View>

            <Button
                // onPress={() => alert('a partir daqui começa as telas do motorista')}
                // onPress={() => {
                //     navigation.replace('UserArea', {role: 'driver', bus}) 
                // }}
                onPress={() => {
                    if (!bus) return; // impede entrar sem escolher ônibus
                    navigation.navigate('DriverArea', { bus });
                    // console.log(bus);
                }}

                mode='contained' 
                textColor='#003566' 
                buttonColor="#fffeee" 
                labelStyle={{fontSize: 20}} 
                contentStyle={{padding: 10}} 
                style={{
                    borderRadius: 30,
                    width: '80%',
                    alignSelf: 'center',
                }}
            >
                Entrar
            </Button>
        </View>
        </TouchableWithoutFeedback>
    );
}