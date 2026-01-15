import React, { useState } from "react";
import { View } from "react-native";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import InputNotice from "../../components/inputNotice/InputNotice";
import AlertSuccess from "../../components/alertSuccess/AlertSuccess";
import styles from "./style";
import { useRoute } from "@react-navigation/native";

export default function NoticeRegisterPage() {
    const route = useRoute();
  const bus = route?.params?.bus;

  const [successVisible, setSuccessVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MyAppBar title={'Avisos'} showProfile />

      <InputNotice
        busId={bus} // <<< aqui
        onSuccess={() => setSuccessVisible(true)}
      />

      <AlertSuccess
        visible={successVisible}
        textMessage={"Sua mensagem foi enviada com sucesso!"}
        buttonMessage={"Ok"}
        onClose={() => setSuccessVisible(false)}
      />
    </View>
  );
}
