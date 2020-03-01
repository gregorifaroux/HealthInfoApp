import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { Question } from "./Question";

import { FaqContent } from "../../content/FaqContent";

export const FaqScreen = () => {
  // Stores which question is opened
  const [opened, setOpened] = React.useState(
    new Array(FaqContent.length).fill(false)
  );

  const onPressQuestion = index => {
    // If the question was already opened, we close it. If not, we open the new question.
    const toggle = opened[index] ? false : true;
    const newOpened = new Array(FaqContent.length).fill(false);
    newOpened[index] = toggle;
    setOpened(newOpened);
  };

  const renderQuestion = ({ question, answer }, index) => (
    <Question
      key={index}
      open={opened[index]}
      toggle={onPressQuestion}
      index={index}
      question={question}
      answer={answer}
    />
  );

  return (
    <Layout style={styles.container}>
      <ScrollView>{FaqContent.map(renderQuestion)}</ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  }
});
