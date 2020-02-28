import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Card } from "@ui-kitten/components";

import Animated from "react-native-reanimated";
import { bInterpolate, useTransition } from "react-native-redash";
import Chevron from "./Chevron";

export const Question = ({ question, answer, open, toggle, index }) => {
  const [cardHeight, setCardHeight] = useState(3);
  const transition = useTransition(open);
  const height = bInterpolate(transition, 0, cardHeight);

  // To get the height of the view/card dynamically
  const onLayout = event => {
    let h = event.nativeEvent.layout.height;
    if (h > cardHeight) {
      setCardHeight(h);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => toggle(index)} activeOpacity={0.7}>
        <Animated.View style={styles.viewQuestion}>
          <View>
            <Text category="s1" style={styles.text}>
              {question}
            </Text>
          </View>
          <View>
            <Chevron {...{ transition }} />
          </View>
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.items, { height }]}>
        <Card key={index} onLayout={onLayout}>
          <Text>{answer}</Text>
        </Card>
      </Animated.View>
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
    paddingBottom: 16,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  items: {
    overflow: "hidden"
  }
});
