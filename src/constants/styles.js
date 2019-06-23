import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    width: "90%",
    marginBottom: 10,
    borderRadius: 5
  },
  btn: {
    borderRadius: 5,
    width: "50%",
    backgroundColor: "#29c2d3",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  btnText: {
    color: "#ccc",
    fontSize: 20
  },
  list:{
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  listText: {
      fontSize: 20,
  }
});

export default styles;
