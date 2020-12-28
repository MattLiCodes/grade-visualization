import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import CourseItem from "../components/CourseItem";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

class HomeScreen extends React.Component {
  data = [];
  state = {
    studentName: "Matthew Li",
    courseData: [
      {
        id: "1",
        name: "MATH 1554",
        instructor: "V. Da Rocha",
        grade: 75,
        assignments: [
          {
            id: "001",
            name: "HW1",
            date: new Date(2020, 0, 1),
            pointsTotal: 100,
            pointsScored: 100,
          },
          {
            id: "002",
            name: "HW2",
            date: new Date(2020, 1, 4),
            pointsTotal: 30,
            pointsScored: 22.5,
          },
          {
            id: "003",
            name: "HW3",
            date: new Date(2020, 1, 11),
            pointsTotal: 50,
            pointsScored: 48,
          },
          {
            id: "004",
            name: "HW4",
            date: new Date(2020, 2, 9),
            pointsTotal: 80,
            pointsScored: 69,
          },
        ],
      },
      {
        id: "2",
        name: "CHEM 1310",
        instructor: "S. Albright",
        grade: 89,
        assignments: [
          {
            id: "001",
            name: "HW1",
            date: "08-10-20",
            pointsTotal: 100,
            pointsScored: 100,
          },
          {
            id: "002",
            name: "HW2",
            date: "09-15-20",
            pointsTotal: 30,
            pointsScored: 25,
          },
          {
            id: "003",
            name: "HW3",
            date: "10-24-20",
            pointsTotal: 50,
            pointsScored: 48,
          },
          {
            id: "004",
            name: "HW4",
            date: "11-01-20",
            pointsTotal: 80,
            pointsScored: 69,
          },
        ],
      },
      {
        id: "3",
        name: "ENGL 1102",
        instructor: "J. Cohen",
        grade: 95,
        assignments: [
          {
            id: "001",
            name: "HW1",
            date: "08-10-20",
            pointsTotal: 100,
            pointsScored: 100,
          },
          {
            id: "002",
            name: "HW2",
            date: "09-15-20",
            pointsTotal: 30,
            pointsScored: 25,
          },
          {
            id: "003",
            name: "HW3",
            date: "10-24-20",
            pointsTotal: 50,
            pointsScored: 48,
          },
          {
            id: "004",
            name: "HW4",
            date: "11-01-20",
            pointsTotal: 80,
            pointsScored: 69,
          },
        ],
      },
      {
        id: "4",
        name: "FREN 1101",
        instructor: "R. LeBlanc",
        grade: 60,
        assignments: [
          {
            id: "001",
            name: "HW1",
            date: "08-10-20",
            pointsTotal: 100,
            pointsScored: 100,
          },
          {
            id: "002",
            name: "HW2",
            date: "09-15-20",
            pointsTotal: 30,
            pointsScored: 25,
          },
          {
            id: "003",
            name: "HW3",
            date: "10-24-20",
            pointsTotal: 50,
            pointsScored: 48,
          },
          {
            id: "004",
            name: "HW4",
            date: "11-01-20",
            pointsTotal: 80,
            pointsScored: 69,
          },
        ],
      },
      {
        id: "5",
        name: "PSYCH 1101",
        instructor: "D. Leader",
        grade: 100,
        assignments: [
          {
            id: "001",
            name: "HW1",
            date: "08-10-20",
            pointsTotal: 100,
            pointsScored: 100,
          },
          {
            id: "002",
            name: "HW2",
            date: "09-15-20",
            pointsTotal: 30,
            pointsScored: 25,
          },
          {
            id: "003",
            name: "HW3",
            date: "10-24-20",
            pointsTotal: 50,
            pointsScored: 48,
          },
          {
            id: "004",
            name: "HW4",
            date: "11-01-20",
            pointsTotal: 80,
            pointsScored: 69,
          },
        ],
      },
    ],
  };

  componentDidMount() {
    fetch("https://gatech.instructure.com/api/v1/courses/132234/quizzes/")
      .then((response) => response.json())
      .then((json) => {
        this.data = json;
        console.log(this.data);
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
