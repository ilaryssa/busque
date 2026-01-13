import { View } from "react-native";
import InputNotice from "../../components/inputNotice/InputNotice";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import styles from "./style";
import { useState } from "react";
import AlertSuccess from "../../components/alertSuccess/AlertSuccess";

export default function NoticeRegisterPage() {
    const [successVisible, setSuccessVisible] = useState(false);

    return(
        <View style={styles.container}> 
            <MyAppBar title={'Avisos'} showProfile/>
            
            <InputNotice onSuccess={() => setSuccessVisible(true)}/>

            <AlertSuccess
                visible={successVisible}
                textMessage={"Sua mensagem foi enviada com sucesso!"}
                buttonMessage={"Ok"}
                onClose={() => setSuccessVisible(false)}
            />
        </View>
    );
}