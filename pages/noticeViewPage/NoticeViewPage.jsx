import { View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import NoticeViewCard from "../../components/noticeView/NoticeViewCard";
import MyAppBar from "../../components/myAppBar/MyAppBar";
import { getNotices } from "../../src/api/noticeService";

export default function NoticeViewPage() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getNotices();
      setNotices(data);
    })();
  }, []);
  
  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#fffeee" }}>
      <MyAppBar title={"Avisos"} showBack={false} />

      <FlatList
        data={notices}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          const hour = item.createdAt
            ? new Date(item.createdAt).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "--:--";

          return (
            <NoticeViewCard
              busId={item.busId}
              hour={hour}
              message={item.message}
            />
          );
        }}
      />
    </View>
  );
}
