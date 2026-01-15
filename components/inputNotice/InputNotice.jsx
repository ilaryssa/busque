import React from "react";
import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { createNotice } from "../../src/api/noticeService";

export default function InputNotice({ onSuccess, busId }) {
    const safeBusId = busId ?? 'A';
  const [value, setValue] = React.useState("");

  async function handleSend() {
    const message = value.trim();
    if (!message) return;

    Keyboard.dismiss();

    // const hour = new Date().toLocaleTimeString("pt-BR", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });

    await createNotice({ //linka com o backend
      busId: safeBusId,                      // "A" ou "B"; isso daqui 
      message: value.trim(),
      createdAt: Date.now(),      // <- isso é o que manda
    });

    setValue("");
    onSuccess?.();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <TextInput
          editable
          multiline
          numberOfLines={5}
          maxLength={200}
          value={value}
          onChangeText={setValue}
          placeholder="Escreva aqui"
          style={styles.textInput}
          textAlignVertical="top"
        />

        <Button
          mode="contained"
          onPress={handleSend}
          style={styles.button}
          textColor="#fffeee"
          disabled={!value.trim()}
        >
          Enviar
        </Button>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
