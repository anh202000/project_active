import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home/index";
import Detail from "./Detail";
import Create from "./Create";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home Page") {
            return (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Detail") {
            return (
              <Ionicons
                name={focused ? "list-circle" : "list-circle-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Create") {
            return (
              <Ionicons
                name={focused ? "list-circle" : "list-circle-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#003f5c",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home Page"
        component={Home}
      />
      <Tab.Screen 
      name="Detail" 
      component={Detail} />

      <Tab.Screen 
      name="Create" 
      component={Create} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
