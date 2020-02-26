import React from "react";
import {
  Icon,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import * as RootNavigation from "./RootNavigation.js";
const MenuIcon = style => <Icon {...style} name="menu-outline" />;
const MenuAction = props => <TopNavigationAction {...props} icon={MenuIcon} />;

const ThemeIcom = style => <Icon {...style} name="moon-outline" />;
const ThemeAction = props => (
  <TopNavigationAction {...props} icon={ThemeIcom} />
);

export const TopNavigationActionsShowcase = ({ changeTheme }) => {
  const renderLeftControl = () => <ThemeAction onPress={changeTheme} />;

  const renderRightControls = () => (
    <MenuAction onPress={() => RootNavigation.toggle()} />
  );

  return (
    <TopNavigation
      title="Health Info App"
      alignment="center"
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
};
