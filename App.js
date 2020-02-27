import React, { useState } from "react";
import { StyleSheet, StatusBar, Platform } from "react-native";
import {
  ApplicationProvider,
  IconRegistry,
  Layout
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light, dark } from "@eva-design/eva";
import { AppNavigator } from "./src/navigation/Navigation";

const themes = {
  light: {
    theme: light,
    icon: "sun",
    text: "LIGHT"
  },
  dark: {
    theme: dark,
    icon: "moon",
    text: "DARK"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
  }
});

const App = () => {
  const [themeName, setThemeName] = useState("light");
  const theme = themes[themeName].theme;
  const themeIcon = themes[themeName].icon;

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  const { text: themeButtonText, icon: themeButtonIcon } =
    themeName === "light" ? themes.dark : themes.light;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Layout style={styles.container}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <AppNavigator changeTheme={changeTheme} themeIcon={themeIcon} />
        </Layout>
      </ApplicationProvider>
    </>
  );
};

export default App;
