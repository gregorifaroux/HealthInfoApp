import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer as UIKittenDrawer, Divider } from "@ui-kitten/components";
import { TopNavigationActionsShowcase } from "./TopNavigation";
import { navigationRef } from "./RootNavigation";
import { HomeScreen } from "../screens/HomeScreen";
import { FAQScreen } from "../screens/FAQScreen";

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <UIKittenDrawer
      data={[{ title: "Home" }, { title: "FAQ" }]}
      selectedIndex={state.index}
      onSelect={onSelect}
    />
  );
};

export const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerPosition="right"
    drawerContent={props => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="FAQ" component={FAQScreen} />
  </Drawer.Navigator>
);

export const AppNavigator = ({ changeTheme, themeIcon }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <TopNavigationActionsShowcase
      changeTheme={changeTheme}
      themeIcon={themeIcon}
    />
    <Divider />
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator />
    </NavigationContainer>
  </SafeAreaView>
);
