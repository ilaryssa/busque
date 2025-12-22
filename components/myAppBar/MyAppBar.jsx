import { View } from "react-native";
import { Appbar } from "react-native-paper";

export default function MyAppBar({ title, onBack, backgroundColor = '#fffeee', titleColor = '#003566'}) {
  return (
    <Appbar.Header style={{ backgroundColor }}>
      <View style={{ width: 48 }} >
        {onBack && (
            <Appbar.BackAction color={titleColor} onPress={onBack} />
        )}
      </View>
      
      <Appbar.Content
        title={title}
        titleStyle={{ color: titleColor }}
      />
    </Appbar.Header>
  );
}
