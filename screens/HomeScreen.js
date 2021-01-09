import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import CourseItem from "../components/CourseItem";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointsTotal: [],
      ids: [],
      pointsScored: [],
      courseData: [],
    };
  }

  componentDidMount() {
    var courseurl = "https://gatech.instructure.com/api/v1/courses/";
    var url =
      "https://gatech.instructure.com/api/v1/courses/132234/assignments/";
    var bearer =
      "Bearer " +
      "2096~BPhEyyhFFfujlxQeGMewVMvryYJDWlftsmyUQ94fSfEAD5zSmtMUoQuVM7XZdIgl";
    var assignments = [];
    var count = 0;
    fetch(url, {
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        for (var i = 0; i < json.length; i++) {
          this.state.pointsTotal.push(json[i].points_possible);
          this.state.ids.push(json[i].id);
          fetch(url + json[i].id + "/submissions/632740", {
            headers: {
              Authorization: bearer,
              "Content-Type": "application/json",
            },
          })
            .then((response2) => response2.json())
            .then((json2) => {
              var score = json2.score;
              this.state.pointsScored.push(score);
              console.log(this.state.pointsScored);
            })
            .catch((error) => console.log(error));
        }

        console.log(assignments);
      });

    fetch(courseurl, {
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        var courses = [];
        for (var i = 0; i < json.length; i++) {
          courses.push({
            id: json[i].id,
            name: json[i].name,
            assignments: assignments,
          });
        }
        this.setState({ courseData: courses });
      })
      .catch((error) => console.log(error));
  }

  render(props) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: "https://i.imgur.com/himchjx.png" }}
        ></Image>
        <Text></Text>
        <View style={styles.content}>
          <FlatList
            data={this.state.courseData}
            renderItem={({ item }) => (
              <CourseItem item={item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  donut: {
    height: 100,
    position: "absolute",
    top: 100,
  },
  logo: {
    position: "absolute",
    top: 70,
    width: 110,
    height: 70,
  },
  content: {
    position: "absolute",
    top: 200,
  },
});

export default HomeScreen;

// color scheme
// #823038
// #FE938C
// #EAD2AC
// #9CAFB7
// #4281A4
