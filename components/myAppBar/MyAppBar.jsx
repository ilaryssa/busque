import { View } from "react-native";
import { Appbar, Avatar } from "react-native-paper";

export default function MyAppBar({ title, onBack, showProfile = false, backgroundColor = '#fffeee', titleColor = '#003566'}) {
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

      <View style={{ width: 48, marginRight: 20, }}>
        {showProfile && (
          <Appbar.Action
            icon={() => (
              <Avatar.Icon
                size={30}
                icon="account"
                color="#fffeee"
                style={{ backgroundColor: '#003566' }}
              />
            )}
          />
        )}
      </View>

    </Appbar.Header>
  );
}
