import React from "react";
import { ScrollView } from "react-native";
import {
  Layout,
  StyleService,
  Text,
  useStyleSheet
} from "@ui-kitten/components";
import backgroundImage from "../../assets/compound.png";
import { ImageOverlay } from "./image-overlay.component";

export const CompoundScreen = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.container}>
      <ScrollView>
        <ImageOverlay style={styles.headerContainer} source={backgroundImage}>
          <Text style={styles.headerTitle} category="h1" status="control">
            Compound
          </Text>
        </ImageOverlay>
        <Layout style={styles.contentContainer} level="1">
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
        </Layout>
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
  headerTitle: {
    textAlign: "center",
    marginVertical: 24,
    zIndex: 1
  },
  headerDescription: {
    zIndex: 1
  },
  contentContainer: {
    flex: 1,
    padding: 24
  }
});
