import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const TEXT = {
  color: "#fff",
  textAlign: "center",
};
function Home({ navigation }) {
  
  const [showPopup, setShowPopup] = useState(false);

  const [getdata, setGetData] = useState([]);
  const [searchdata, setSearchData] = useState([]);
  const [search, setSearch] = useState(""); 

  const [language, setLanguage] = useState(false);

  const changeLanguageVN = () => {
    setLanguage(true);
  };
  const changeLanguageEN = () => {
    setLanguage(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    getdata.map((item) => {
      setGetData(item.name)
    })
  }, []);

  useEffect(() => {
    GetList()
  },[])

  const GetList = () => {
    const URL_GET_List =
      "https://615c94d9c29813001773626d.mockapi.io/api/native/todo/products";

    fetch(URL_GET_List)
      .then((response) => response.json())
      .then((responseJson) => {
        setGetData(responseJson);
        setSearchData(responseJson);
      })
      .catch((error) => {

        console.error(error);
      });
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = searchdata.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setGetData(newData);
      setSearch(text);
    } else {
      setGetData(searchdata);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={styles.itemStyle} onPress={() => detailItem(item)}>
          {item?.id?.toUpperCase()}
        </Text>
        <Text style={styles.itemStyleName} onPress={() => detailItem(item)}>
          {`${item.name.slice(0,8)}` + `${item.name.length > 8 ? '...' : ''}`}
        </Text>
        <Text style={styles.itemStyleDateTime} onPress={() => detailItem(item)}>
          {item.datetime}
        </Text>
        <Text style={styles.itemStyleDateTime} onPress={() => detailItem(item)}>
        {`${item.price.slice(0,8)}` + `${item.price.length > 8 ? '...' : ''}`} USD
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const detailItem = (item) => {
    navigation.navigate("Detail", { item: item });

    alert("Id : " + item.id + "Price :" + item.price + " USD");
    console.log(item,"ádasdsadsad")
  };
  return (
    <>
      <StatusBar color="white" backgroundColor="#003f5c" />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.buttonSignInGoogle}
            onPress={togglePopup}
          >
            <Text style={styles.buttonLoginText}>Log Out</Text>
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            style={{ flex: 1, backgroundColor: "#FA8072" }}
          >
           <Text
            style={{ fontSize: 22, padding: 14, marginLeft: 30, color: "#fff" }}
          >
            {language === true ? "Trang chủ" : "Home screen"}
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
        <View style={styles.header}>
          <View style={styles.headerSearch}>
            <TextInput
              style={styles.inputSearch}
              placeholder="Search Something"
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
            />
            <Ionicons
              name="search"
              size={18}
              color={"black"}
              style={styles.iconSearch}
            />
          </View>
        </View>

        <View style={styles.list}>
          <FlatList
            data={getdata}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 22,
          }}
        >
          <Modal animationType="slide" transparent={true} visible={showPopup}>
            <View style={{ backgroundColor: "#000000aa", flex: 1, height: 20 }}>
              <View
                style={{
                  backgroundColor: "#000000aa",
                  height: 80,
                  padding: 20,
                  borderRadius: 10,
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22,
                    margin: 10,
                  }}
                >
                  <View
                    style={{
                      margin: 20,
                      backgroundColor: "white",
                      borderRadius: 20,
                      padding: 40,
                      alignItems: "center",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 10,
                        height: 2,
                      },
                      shadowOpacity: 0.5,
                      shadowRadius: 4,
                      elevation: 10,
                    }}
                  >
                    <Text style={{ fontSize: 40, marginBottom: 40 }}>
                      Do you want to log out?
                    </Text>
                    <View style={styles.action}>
                      <TouchableOpacity
                        style={styles.buttonSignInGoogle}
                        onPress={togglePopup}
                      >
                        <Text style={styles.buttonLoginText}>Cancel</Text>
                      </TouchableOpacity>
                      <Text>                      </Text>
                      <TouchableOpacity
                        style={styles.buttonSignInGoogle}
                        onPress={() => navigation.navigate("Login")}
                      >
                        <Text style={styles.buttonLoginText}>Log Out</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    height: 40,
    paddingHorizontal: 10,
  },
  list: {
    height: 600,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  headerFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
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
    position: "absolute",
    right: 10,
  },
  buttonLoginText: {
    ...TEXT,
    fontSize: 20,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputSearch: {
    height: 40,
    paddingHorizontal: 35,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    width: "80%",
    marginRight: 5,
  },
  iconSearch: {
    position: "absolute",
    left: 10,
  },
  buttonlogout: {
    borderRadius: 25,
    backgroundColor: "#FA8072",
    justifyContent: "center",
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
  buttonSignInGoogle: {
    height: 30,
    borderRadius: 6,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
    width: 80,
  },
  buttonStyles: {
    height: 30,
    borderRadius: 6,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
    width: 80,
    marginLeft: 10,
  },
  imageWrapper: {
    width: "30%",
    height: 100,
  },
  contentWrapper: {
    width: "70%",
    backgroundColor: "yellow",
    height: 100,
  },
  itemStyle: {
    padding: 10,
    width: "10%",
  },
  itemStyleName: {
    padding: 10,
    width: 86,
  },
  itemStyleDateTime: {
    padding: 10,
    marginLeft: 14,
  },
});

export default Home;
