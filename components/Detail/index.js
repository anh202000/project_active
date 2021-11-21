import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

function Detail({ route, navigation }) {
  const { item } = route.params;

  const [language, setLanguage] = useState(false);

  const changeLanguageVN = () => {
    setLanguage(true);
  };
  const changeLanguageEN = () => {
    setLanguage(false);
  };

  const [getDetail, setgetDetail] = useState({
    name: item.name,
    datetime: item.datetime,
    furnitureTypes: item.furnitureTypes,
    price: item.price,
    bedroom: item.bedroom,
    note: item.note,
    prototypes: item.prototypes,
  });

  const onChangeName = (value) => {
    setgetDetail({ ...getDetail, name: value });
  };

  const onChangedatetime = (value) => {
    setgetDetail({ ...getDetail, datetime: value });
  };

  const onChangefurnitureTypes = (value) => {
    setgetDetail({ ...getDetail, furnitureTypes: value });
  };

  const onChangeprice = (value) => {
    setgetDetail({ ...getDetail, price: value });
  };

  const onChangebedroom = (value) => {
    setgetDetail({ ...getDetail, bedroom: value });
  };

  const onChangenote = (value) => {
    setgetDetail({ ...getDetail, note: value });
  };

  const onChangeprototypes = (value) => {
    setgetDetail({ ...getDetail, prototypes: value });
  };

  const Update = () => {
    const URL_UPDATE_BY_ID =
      "https://615c94d9c29813001773626d.mockapi.io/api/native/todo/products/";

    axios
      .put(
        URL_UPDATE_BY_ID + item.id,
        qs.stringify({
          name: getDetail.name,
          datetime: getDetail.datetime,
          furnitureTypes: [],
          price: getDetail.price,
          bedroom: getDetail.bedroom,
          note: getDetail.note,
          prototypes: getDetail.prototypes,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        navigation.push("Home");
      });
  };

  const deleteData = () => {
    const URL_DELETE_BY_ID =
      "https://615c94d9c29813001773626d.mockapi.io/api/native/todo/products/";
    fetch(URL_DELETE_BY_ID + item.id, {
      method: "DELETE",
    })
      .then((response) => {
        response.text();
        navigation.push("Home");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <StatusBar color="white" backgroundColor="#003f5c" />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.buttonSignInGoogle}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonLoginText}>Back</Text>
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            style={{ flex: 1, backgroundColor: "#FA8072" }}
          >
            <Text
              style={{
                fontSize: 22,
                padding: 14,
                marginLeft: 30,
                color: "#fff",
              }}
            >
              {language === true ? "Màn chi tiết" : "Detail screen"}
            </Text>
            <View style={styles.actionColor}>
              <Text style={styles.TextChangeMode}>Language:</Text>
              <TouchableOpacity onPress={changeLanguageVN}>
                <Text style={styles.TextChange}>VN</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={changeLanguageEN}>
                <Text style={styles.TextChangeColor}>EN</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={{ flex: 3, marginHorizontal: 15 }}>
            <Text style={styles.itemStyle}>
              {language === true ? "Tên người tạo" : "Name of the reporter"}
            </Text>
            <TextInput
              style={styles.inputSearch}
              value={getDetail.name}
              onChangeText={(value) => onChangeName(value)}
            />

            <Text style={styles.itemStyle}>
              {language === true ? "Ngày tháng" : "DateTime"}
            </Text>
            <TextInput
              style={styles.inputSearch}
              value={getDetail.datetime}
              onChangeText={(value) => onChangedatetime(value)}
            />

            <Text style={styles.itemStyle}>
              {" "}
              {language === true ? "Loại nội thất" : "Furniture type"}
            </Text>
            <TextInput
              style={styles.inputSearch}
              value={getDetail.furnitureTypes}
              onChangeText={(value) => onChangefurnitureTypes(value)}
            />

            <Text style={styles.itemStyle}>
              {language === true ? "Giá thuê hàng tháng" : "Monthly rent price"}
            </Text>
            <TextInput
              style={styles.inputSearch}
              value={getDetail.price}
              onChangeText={(value) => onChangeprice(value)}
            />

            <Text style={styles.itemStyle}>
              {language === true ? "Phòng ngủ" : "Bedrooms"}
            </Text>
            <TextInput
              style={styles.inputSearch}
              value={getDetail.bedroom}
              onChangeText={(value) => onChangebedroom(value)}
            />

            <Text style={styles.itemStyle}>
              {language === true ? "Ghi chú" : "Notes"}
            </Text>
            <TextInput
              style={styles.inputSearch}
              value={getDetail.note}
              onChangeText={(value) => onChangenote(value)}
            />

            <Text style={styles.itemStyle}>
              {language === true ? "Loại tài sản" : "Property types"}
            </Text>
            <TextInput
              style={styles.inputSearch}
              value={getDetail.prototypes}
              onChangeText={(value) => onChangeprototypes(value)}
            />

            <View style={styles.list}>
              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 10 }}
                onPress={deleteData}
              >
                <View
                  style={{
                    height: 30,
                    borderRadius: 6,
                    backgroundColor: "#87CEEB",
                    justifyContent: "center",
                    width: 80,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ ...TEXT, fontSize: 20 }}>Delete</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 10 }}
                onPress={Update}
              >
                <View
                  style={{
                    height: 30,
                    borderRadius: 6,
                    backgroundColor: "#87CEEB",
                    justifyContent: "center",
                    width: 100,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ ...TEXT, fontSize: 20 }}>Update</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 110,
    backgroundColor: "#dcdcdc",
    // justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  buttonSelectStyle: {
    backgroundColor: "white",
    height: 40,
    width: "47%",
    borderRadius: 10,
    borderColor: "#757575",
    borderWidth: 1,
    borderStyle: "solid",
  },
  headerSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  inputSearch: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  iconSearch: {
    position: "absolute",
    left: 10,
  },
  wrapper: {
    height: 60,
    // marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#FA8072",
  },
  contentWrapper: {
    width: "70%",
    backgroundColor: "yellow",
    height: 100,
  },
  actionColor: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 16,
  },
  TextChangeMode: {
    ...TEXT,
    fontSize: 14,
    lineHeight: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  TextChange: {
    ...TEXT,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    fontSize: 14,
    lineHeight: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  TextChangeColor: {
    ...TEXT,
    backgroundColor: "#87CEEB",
    fontSize: 14,
    lineHeight: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonSignInGoogle: {
    height: 30,
    width: 80,
    borderRadius: 5,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
  },
  buttonLoginText: {
    ...TEXT,
    fontSize: 20,
  },
  list: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    right: 10,
  },
  itemStyle: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default Detail;
