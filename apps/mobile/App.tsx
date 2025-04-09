import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "./firebase";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello This is Remember-App</Text>
      <StatusBar style="auto" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Firebase 연결 성공 ✅</Text>
        <Text>현재 유저: {auth.currentUser?.uid ?? "없음"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
