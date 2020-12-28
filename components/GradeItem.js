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

export default function GradeItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.instructor}>
          {item.date.toLocaleDateString("en-US")}
        </Text>
      </View>
      <View style={styles.right}>
        <Text
          style={[
            styles.grade,
            {
              color: scale(
                item.pointsScored.toFixed(2) / item.pointsTotal
              ).css(),
            },
          ]}
        >
          {item.pointsScored} / {item.pointsTotal}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderColor: "rgb(134, 65, 244)",
    marginTop: 15,
    marginLeft: 0,
    marginRight: 0,
    width: 400,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 30,
    color: "rgb(134, 65, 244)",
    fontFamily: "AvenirNext-DemiBold",
  },
  instructor: {
    marginTop: 5,
    fontSize: 20,
    color: "rgb(134, 65, 244)",
    fontFamily: "AvenirNext-Medium",
  },
  grade: {
    position: "absolute",
    alignSelf: "stretch",
    textAlign: "right",
    fontSize: 20,
    fontFamily: "AvenirNext-DemiBold",
  },
  left: {
    width: 300,
  },
});
