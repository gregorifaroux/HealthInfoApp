import React from "react";
import { ScrollView } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { CardInfo } from "../commmon/CardInfo";
import { HomeContent } from "../content/HomeContent";

export const HomeScreen = () => {
  const renderContent = ({ title, content, status }, index) => (
    <CardInfo key={index} title={title} content={content} status={status} />
  );
  return (
    <Layout style={{ alignItems: "center", flex: 1 }}>
      <ScrollView>
        <>
          <Text category="h1" style={{ textAlign: "center" }}>
            Welcome !
          </Text>
          {HomeContent.map(renderContent)}
        </>
      </ScrollView>
    </Layout>
  );
};
