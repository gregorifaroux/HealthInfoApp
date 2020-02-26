import React from "react";
import { Layout, Text } from "@ui-kitten/components";

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">Welcome !</Text>
    </Layout>
  );
};
