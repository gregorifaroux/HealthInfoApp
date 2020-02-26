import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";

import { Layout, Text, Card, Icon, Divider } from "@ui-kitten/components";
import { FaqContent } from "../content/FaqContent";

export const FaqScreen = () => {
  const [liked, setLiked] = React.useState(
    new Array(FaqContent.length).fill(false)
  );

  const onPressQuestion = index => {
    const toggle = liked[index] ? false : true;
    const newLiked = new Array(FaqContent.length).fill(false);
    newLiked[index] = toggle;
    setLiked(newLiked);
  };

  const renderQuestion = ({ question, answer }, index) => (
    <>
      <TouchableOpacity onPress={() => onPressQuestion(index)}>
        <View style={styles.viewQuestion}>
          <View>
            <Text category="s1" style={styles.text}>
              {question}
            </Text>
          </View>
          <View>
            <Icon
              name={
                liked[index] ? "chevron-down-outline" : "chevron-up-outline"
              }
              width={32}
              height={32}
              fill="#3366FF"
            />
          </View>
        </View>
      </TouchableOpacity>
      <Divider />
      {liked[index] && (
        <Card>
          <Text>{answer}</Text>
        </Card>
      )}
    </>
  );
  return (
    <>
      <Layout style={styles.layoutTitle}>
        <Text category="h1">FAQ</Text>
      </Layout>
      <Layout style={styles.layoutContent}>
        <ScrollView>{FaqContent.map(renderQuestion)}</ScrollView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layoutTitle: {
    alignItems: "center"
  },
  layoutContent: {
    flex: 1
  },
  text: {
    margin: 8
  },
  alternativeContainer: {
    borderRadius: 4,
    margin: 8
  },
  view: {
    display: "flex",
    justifyContent: "space-between"
  },
  viewQuestion: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  }
});
