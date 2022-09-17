import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import connectDB from "./config/firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./navigation/MainNavigator";

connectDB();

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
