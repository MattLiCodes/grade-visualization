import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LineChart, Grid, ProgressCircle } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import chroma from "chroma-js";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "@react-navigation/stack";

const colors = [
  "#390099",
  "#390099",
  "#390099",
  "#390099",
  "#390099",
  "#390099",
  "#9e0059",
  "#ff5400",
  "#ffbd00",
];

const scale = chroma.scale(colors);

export default function CourseItem({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Course", item);
      }}
    >
      <View style={styles.left}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.instructor}>{item.instructor}</Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.grade, { color: scale(item.grade * 0.01).css() }]}>
          {item.grade}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 50,
    width: 400,
    height: 100,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 30,
    color: "black",
    fontFamily: "AvenirNext-DemiBold",
  },
  instructor: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: "AvenirNext-Medium",
  },
  grade: {
    position: "absolute",
    marginRight: 30,
    fontSize: 30,
    fontFamily: "AvenirNext-DemiBold",
  },
  donut: {
    height: 100,
  },
  left: {
    width: 300,
  },
});
