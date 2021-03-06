import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import GradeItem from "../components/GradeItem";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

import { LineChart, YAxis, XAxis, Grid } from "react-native-svg-charts";

function CourseScreen({ navigation, route }) {
  const { id, name, assignments } = route.params;
  // const dates = [];
  const grades = [];
  for (var i = 0; i < assignments.length; i++) {
    grades.push(assignments[i].pointsScored);
  }

  const [scores, setScores] = useState(assignments);
  const [isLoading, setLoading] = useState(false);

  const Gradient = () => (
    <Defs key={"gradient"}>
      <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
        <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
        <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
      </LinearGradient>
    </Defs>
  );

  const Decorator = ({ x, y, data }) => {
    return data.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={5}
        stroke={"rgb(134, 65, 244)"}
        fill={"white"}
      />
    ));
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, { flex: 1 }]}>
        <Text>Hi</Text>
        {/* <Text>Course Hi</Text>
      <Text>id: {JSON.stringify(id)}</Text>
      <Text>name: {JSON.stringify(name)}</Text>
      <Text>instructor: {JSON.stringify(instructor)}</Text>
      <Text>grade: {JSON.stringify(grade)}</Text> */}
        <View style={styles.chartView}>
          <View style={{ flex: 1 }}>
            <LineChart
              style={{ height: 200 }}
              data={grades}
              svg={{
                strokeWidth: 4,
                stroke: "url(#gradient)",
              }}
              contentInset={{ top: 10, bottom: 10, left: 10, right: 10 }}
              numberOfTicks={3}
              yMin={Math.min.apply(Math, grades) - 5}
              yMax={100}
            >
              <Decorator />
              <Gradient />
              <Grid />
            </LineChart>
            {/* <YAxis
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                height: 180,
              }}
              data={grades}
              svg={{
                fontSize: 10,
                fill: "black",
                stroke: "black",
                strokeWidth: 0.1,
                alignmentBaseline: "baseline",
              }}
              numberOfTicks={3}
              contentInset={{ top: 20, bottom: 10 }}
            /> */}
            {/* <XAxis
            style={{ marginHorizontal: -10, height: 30 }}
            data={dates}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: "black" }}
          /> */}
          </View>
        </View>
        <FlatList
          styles={styles.list}
          data={scores}
          renderItem={({ item }) => <GradeItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  chartView: {
    height: 200,
    width: 400,
    padding: 20,
    flexDirection: "row",
  },
});

export default CourseScreen;
// 632740
