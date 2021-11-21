import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";
import axios from "axios";
import qs from "qs";

const LoginScreen = ({ navigation }) => {
  const [changeColor, setChangeColor] = useState("#003f5c");

  const changeBackGround = () => {
    let color = "#87CEEB";
    setChangeColor(color);
  };

  const changeBackGroundPink = () => {
    let colors = "#FFC0CB";
    setChangeColor(colors);
  };

  const [user, setUser] = useState({
    name: "",
    passwork: "",
  });

  const onChangeName = (value) => {
    setUser({ ...user, name: value });
  };

  const onChangePasswork = (value) => {
    setUser({ ...user, passwork: value });
  };

  // const [getdata, setGetData] = useState([]);

  // const GetList = () => {
  //   const URL_GET_List =
  //     "https://6176dcc09c328300175f56b7.mockapi.io/aanh/login/Login";

  //   fetch(URL_GET_List)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setGetData(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   GetList();
  // }, []);

  function Login() {
    const URL_UPDATE_BY_ID =
      "https://6176dcc09c328300175f56b7.mockapi.io/aanh/login/Login";
    axios
      .post(
        URL_UPDATE_BY_ID,
        qs.stringify({
          name: user.name,
          passwork: user.passwork,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        navigation.navigate("Home")
      });
  }

  return (
    <>
      <StatusBar color="white" backgroundColor="#003f5c" />
      <SafeAreaView
        style={[styles.container, { backgroundColor: changeColor }]}
      >
        <View style={styles.content}>
          <View style={styles.actionColor}>
            <Text style={styles.TextChangeMode}>Mode:</Text>
            <TouchableOpacity onPress={changeBackGround}>
              <Text style={styles.TextChange}>Blue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeBackGroundPink}>
              <Text style={styles.TextChangeColor}>Pink</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.hiText}>Sign In</Text>
          </View>

          <View style={styles.form}>
            <FontAwesome5 name="lock" style={styles.iconLock} />
            <FontAwesome5 name="user" style={styles.iconUser} />
            <View style={styles.formGroup}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Name"
                onChangeText={(value) => onChangeName(value)}
                placeholderTextColor="#929292"
              />
              {user.name.length < 8 && user.passwork.length < 8 && (
                <Text
                  style={{
                    fontSize: 18,
                    color: "#FF0D10",
                    paddingHorizontal: 20,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  Please input name!
                </Text>
              )}
            </View>

            <TextInput
              style={styles.inputPassword}
              placeholder="Password"
              onChangeText={(value) => onChangePasswork(value)}
              placeholderTextColor="#929292"
            />
            {user.name.length < 8 && user.passwork.length < 8 && (
              <Text
                style={{
                  fontSize: 18,
                  color: "#FF0D10",
                  paddingHorizontal: 20,
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                Please input passwork!
              </Text>
            )}
          </View>

          <View style={styles.action}>
            <TouchableOpacity>
              <Text style={styles.userText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.userText}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={Login}
              disabled={user.name.length < 8 && user.passwork.length < 8}
            >
              <Text style={styles.buttonLoginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSignInGoogle}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonLoginText}>G+ Sign In with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB6C1",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 20,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  TextChangeMode: {
    ...TEXT,
    fontSize: 14,
    lineHeight: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  TextChange: {
    ...TEXT,
    backgroundColor: "#87CEEB",
    fontSize: 14,
    lineHeight: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  TextChangeColor: {
    ...TEXT,
    backgroundColor: "#FFB6C1",
    fontSize: 14,
    lineHeight: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  hiText: {
    ...TEXT,
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
    paddingHorizontal: 25,
  },
  form: {
    marginBottom: 30,
  },
  iconUser: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 107,
    left: 22,
    zIndex: 10,
  },
  formGroup: {
    paddingBottom: 25,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    paddingLeft: 60,
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FA8072",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonSignInGoogle: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FA8072",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonLoginText: {
    ...TEXT,
    fontSize: 20,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionColor: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  linkHover: {
    backgroundColor: "#FA8072",
  },
});

export default LoginScreen;
