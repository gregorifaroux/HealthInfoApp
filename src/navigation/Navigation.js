import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer as UIKittenDrawer, Divider } from "@ui-kitten/components";
import { TopNavigationActionsShowcase } from "./TopNavigation";
import { navigationRef } from "./RootNavigation";
import { HomeScreen } from "../screens/HomeScreen";
import { FaqScreen } from "../screens/Faq/FaqScreen";
import { ClinicalProcessScreen } from "../screens/ClinicalProcess";
import { CompoundScreen } from "../screens/Compound";
import { ContactScreen } from "../screens/Contact";
import { PhysicianProcessScreen } from "../screens/PhysicianProcess";

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation, state, setNavTitle }) => {
  const onSelect = index => {
    setNavTitle(state.routeNames[index]);
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <UIKittenDrawer
      data={[
        { title: "Home" },
        { title: "Compound" },
        { title: "Clinical Process" },
        { title: "Physician Process" },
        { title: "FAQ" },
        { title: "Contact" }
      ]}
      selectedIndex={state.index}
      onSelect={onSelect}
    />
  );
};

export const DrawerNavigator = ({ setNavTitle }) => (
  <Drawer.Navigator
    drawerPosition="right"
    drawerContent={props => (
      <DrawerContent {...props} setNavTitle={setNavTitle} />
    )}
  >
    <Drawer.Screen name="Health Info App" component={HomeScreen} />
    <Drawer.Screen name="Compound" component={CompoundScreen} />
    <Drawer.Screen name="Clinical Process" component={ClinicalProcessScreen} />
    <Drawer.Screen
      name="Physician Process"
      component={PhysicianProcessScreen}
    />
    <Drawer.Screen name="FAQ" component={FaqScreen} />
    <Drawer.Screen name="Contact" component={ContactScreen} />
  </Drawer.Navigator>
);

export const AppNavigator = ({ changeTheme, themeIcon }) => {
  const [pageTitle, setPageTitle] = useState("Health Info App");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationActionsShowcase
        title={pageTitle}
        changeTheme={changeTheme}
        themeIcon={themeIcon}
      />
      <Divider />
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator setNavTitle={setPageTitle} />
      </NavigationContainer>
    </SafeAreaView>
  );
};
