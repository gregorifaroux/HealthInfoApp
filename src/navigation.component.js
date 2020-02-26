import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Drawer as UIKittenDrawer,
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation
} from "@ui-kitten/components";
import { TopNavigationActionsShowcase } from "./topnavigation.component";
import { navigationRef } from "./RootNavigation";

const Drawer = createDrawerNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <UIKittenDrawer
      data={[{ title: "Users" }, { title: "Orders" }]}
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
    <Drawer.Screen name="Users" component={UsersScreen} />
    <Drawer.Screen name="Orders" component={OrdersScreen} />
  </Drawer.Navigator>
);

export const AppNavigator = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <TopNavigationActionsShowcase />
    <Divider />
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator />
    </NavigationContainer>
  </SafeAreaView>
);
