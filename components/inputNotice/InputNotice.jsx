import React, {useState}from "react";
import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { createNotice, deleteLastNotice } from "../../src/api/noticeService";
import ConfirmButton from "../confirmButton/ConfirmButton";

export default function InputNotice({ onSuccess, busId }) {
  const safeBusId = busId ?? 'A';
  const [value, setValue] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);
  const [snackText, setSnackText] = useState("");
  const [hasSentNotice, setHasSentNotice] = useState(false);


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
    // setSnackText("Aviso enviado com sucesso!");
    // setSnackVisible(true);
    setHasSentNotice(true);
    onSuccess?.();
  }

  async function handleDeleteLastNotice() {
    // console.log("CLICOU NO BOTÃO EXCLUIR");

    try {
      const success = await deleteLastNotice(safeBusId);

      if (!success) {
        setSnackText("Só é possível excluir avisos dos últimos 2 minutos.");
      } else {
        setSnackText("Último aviso excluído com sucesso.");
        setHasSentNotice(false);
      }

      setSnackVisible(true);
    } catch (e) {
      console.log("ERRO AO EXCLUIR:", e);
    }
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
          // disabled={!value.trim()}
        >
          Enviar
        </Button>

      {hasSentNotice && (
        <Button
          mode="outlined"
          onPress={handleDeleteLastNotice}
          style={styles.buttonDelete}
          textColor="#003566"
        >
          Excluir último aviso
        </Button>
      )}


        <Snackbar
          visible={snackVisible}
          onDismiss={() => setSnackVisible(false)}
          duration={3000}
        >
          {snackText}
        </Snackbar>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
