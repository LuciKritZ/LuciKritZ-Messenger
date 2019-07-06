import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    padding: 10,
    opacity: 1
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
  },
  validations : {
    fontSize:5,
    padding: 10,
    borderColor: "#CCC",
    width: "90%",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#F67280"
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    height: "20%"
  },
  formRegister: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer:{
    backgroundColor: "#F5FCFF",
    height: "100%"
  }
});

export default styles;
