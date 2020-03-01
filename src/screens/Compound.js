import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Layout,
  StyleService,
  Text,
  useStyleSheet
} from "@ui-kitten/components";
import backgroundImage from "../../assets/compound.png";

export const CompoundScreen = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.container} level="2">
      <ScrollView>
        <ImageBackground
          style={styles.headerContainer}
          source={backgroundImage}
        />
        <Card>
          <Text>
            The compound is an antimicrobial mineral complex that acts against
            spirochetal organisms, such as those found in arthropod-associated
            infections. The compound is a liquid formulation that can be
            nebulized and used as an inhalant.
            {"\n\n"}
            The individual components of the compound are classified by the EPA
            as having GRAS (Generally Recognized As Safe) status, and are part
            of a proprietary compound.
            {"\n\n"}
            The compound disrupts the protein and nucleic acid structures of
            spirochetes, and is designed and purposed to manage spirochetal
            infections. It is a bactericide that penetrates the cell wall of
            microorganisms quickly and delivers lethal effects to spirochetes on
            contact.
          </Text>
        </Card>
      </ScrollView>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 192,
    zIndex: 1
  },
  authorPhoto: {
    position: "absolute",
    left: 24,
    bottom: -24,
    borderWidth: 2,
    borderColor: "border-basic-color-2"
  },
  titleLabel: {
    marginTop: 48,
    marginBottom: 24
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24
  },
  dateIcon: {
    width: 24,
    height: 24,
    tintColor: "text-hint-color"
  },
  dateLabel: {
    flex: 1,
    marginHorizontal: 8
  },
  activityContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  reactionButton: {
    paddingHorizontal: 0
  }
});
