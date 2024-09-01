import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import UserHeader from "../../components/userHeader";

import NewsCards from "../../components/newsComponents/newsCards/NewsCards";

export default function News() {
  return (
    <View style={styles.container}>
      <UserHeader />

      <ScrollView>
        <NewsCards cardTipe={1} />
        <NewsCards cardTipe={2} />
        <NewsCards cardTipe={1} />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D7A1FF",
    paddingBottom: 20,
  },
  scrollView: {
    backgroundColor: "#000",
    width: 200,
    height: 400,
  },
});
