import { View } from "react-native";
import { Appbar } from "react-native-paper";

export default function MyAppBar({ title, onBack }) {
  return (
    <Appbar.Header style={{ backgroundColor: '#fffeee' }}>
      <View style={{ width: 48 }} >
        {onBack && (
            <Appbar.BackAction color="#003566" onPress={onBack} />
        )}
      </View>
      
      <Appbar.Content
        title={title}
        titleStyle={{ color: '#003566', }}
      />
    </Appbar.Header>
  );
}
