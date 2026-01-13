import { Modal, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function AlertSuccess({ visible, onClose, textMessage, buttonMessage }) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>
            {textMessage}
          </Text>

        <Button
            mode="contained"
            onPress={onClose}
            buttonColor="#fffeee"
            textColor="#003566"
            style={styles.contained}
        >
            {buttonMessage}
        </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#003566",
    borderRadius: 20,
    padding: 24,
    width: "85%",
  },
  title: {
    color: "#fffeee",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    color: "#fffeee",
    fontSize: 16,
    marginBottom: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  outlined: {
    borderColor: "#fffeee",
    borderWidth: 1,
    borderRadius: 30,
    width: "45%",
  },
  contained: {
    borderRadius: 30,
    width: "45%",
    alignSelf: 'flex-end',
  },
});

