import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import CourseItem from "./components/CourseItem";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { LineChart, Grid, ProgressCircle } from "react-native-svg-charts";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CourseScreen from "./screens/CourseScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Course" component={CourseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
