import React from "react";
import {
  Icon,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import * as RootNavigation from "./RootNavigation.js";
const MenuIcon = style => <Icon {...style} name="more-vertical" />;

const MenuAction = props => <TopNavigationAction {...props} icon={MenuIcon} />;

export const TopNavigationActionsShowcase = () => {
  const renderRightControls = () => (
    <MenuAction onPress={() => RootNavigation.toggle()} />
  );

  return (
    <TopNavigation
      title="Health Info App"
      alignment="center"
      rightControls={renderRightControls()}
    />
  );
};
