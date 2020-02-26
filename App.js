import React, { useState } from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light, dark } from "@eva-design/eva";
import { AppNavigator } from "./src/navigation.component";

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

const App = () => {
  const [themeName, setThemeName] = useState("light");
  const theme = themes[themeName].theme;

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  const { text: themeButtonText, icon: themeButtonIcon } =
    themeName === "light" ? themes.dark : themes.light;

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <AppNavigator changeTheme={changeTheme} />
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
