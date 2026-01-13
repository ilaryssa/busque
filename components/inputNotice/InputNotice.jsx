import React from "react";
import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native"
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import styles from "./style";

export default function InputNotice({onSuccess}) {
    const [value, setValue] = React.useState('');

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <SafeAreaView style={styles.container}>
                <TextInput 
                    editable
                    multiline
                    numberOfLines={5}
                    maxLength={200}
                    value={value}
                    onChangeText={text => setValue(text)}
                    placeholder="Escreva aqui"
                    style={styles.textInput}
                    textAlignVertical="top"
                />
                <Button 
                    mode='contained'
                    onPress={() => {
                        Keyboard.dismiss(); //deve fechar o teclado tambem, ou seja, deixar de estar focus
                        // alert('Mensagem enviada!');
                        setValue(''); 
                        onSuccess();
                    }}
                    style={styles.button}
                    textColor='#fffeee'
                >
                    Enviar
                </Button>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}