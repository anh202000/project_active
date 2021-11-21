// import axios from "axios";
// import qs from "qs";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   TextInput,
//   CheckBox,
//   TouchableOpacity,
// } from "react-native";
// import SelectDropdown from "react-native-select-dropdown";

// const types = [
//   { value: "1", label: "Furnished" },
//   { value: "2", label: "Unfurnished" },
//   { value: "3", label: "Part Furnished" },
// ];

// const TEXT = {
//   color: "#fff",
//   textAlign: "center",
// };

// function Create({ navigation }) {
//   const [getDetail, setgetDetail] = useState({
//     name: "",
//     datetime: "",
//     furnitureTypes: "",
//     price: "",
//     bedroom: "",
//     note: "",
//     prototypes: "",
//   });

//   const onChangeName = (value) => {
//     setgetDetail({ ...getDetail, name: value });
//   };

//   const onChangedatetime = (value) => {
//     setgetDetail({ ...getDetail, datetime: value });
//   };

//   const onChangefurnitureTypes = (value) => {
//     setgetDetail({ ...getDetail, furnitureTypes: value });
//   };

//   const onChangeprice = (value) => {
//     setgetDetail({ ...getDetail, price: value });
//   };

//   const onChangebedroom = (value) => {
//     setgetDetail({ ...getDetail, bedroom: value });
//   };

//   const onChangenote = (value) => {
//     setgetDetail({ ...getDetail, note: value });
//   };

//   const onChangeprototypes = (value) => {
//     setgetDetail({ ...getDetail, prototypes: value });
//   };

//   const Create = () => {
//     const URL_UPDATE_BY_ID =
//       "https://615c94d9c29813001773626d.mockapi.io/api/native/todo/products";

//     axios
//       .post(
//         URL_UPDATE_BY_ID,
//         qs.stringify({
//           // name: "Anhasdasd",
//           // datetime: "2087-10-20",
//           // furnitureTypes: "{1: lass}",
//           // price: 15123,
//           // bedroom: "bedroom 31",
//           // note: "note 31",
//           // prototypes: "prototypes",
//           name: getDetail.name,
//           datetime: getDetail.datetime,
//           furnitureTypes: getDetail.furnitureTypes,
//           price: getDetail.price,
//           bedroom: getDetail.bedroom,
//           note: getDetail.note,
//           prototypes: getDetail.prototypes,
//         }),
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         }
//       )
//       .then(function (response) {
//         console.log(response);
//         navigation.push("Home");
//       });
//   };

//   return (
//     <>
//       <StatusBar color="white" backgroundColor="#003f5c" />
//       <View style={styles.container}>
//         <View style={styles.wrapper}>
//           <TouchableOpacity
//             style={styles.buttonSignInGoogle}
//             onPress={() => navigation.goBack()}
//           >
//             <Text style={styles.buttonLoginText}>Back</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.list}>
//           <View style={{ flex: 3, marginHorizontal: 15 }}>
//             <Text style={styles.itemStyle}>Name of the reporter </Text>
//             <TextInput
//               style={styles.inputSearch}
//               value={getDetail.name}
//               onChangeText={(value) => onChangeName(value)}
//             />

//             <Text style={styles.itemStyle}>DateTime</Text>
//             <TextInput
//               style={styles.inputSearch}
//               value={getDetail.datetime}
//               onChangeText={(value) => onChangedatetime(value)}
//             />

//             <Text style={styles.itemStyle}>Furniture types </Text>
//             <TextInput
//               style={styles.inputSearch}
//               value={getDetail.furnitureTypes}
//               onChangeText={(value) => onChangefurnitureTypes(value)}
//             />
//             {/* <CheckBox
//               value={getDetail.furnitureTypes}
//               onValueChange={(value) => onChangefurnitureTypes(value)}
//               style={styles.checkbox}
//             /> */}
//             {/* <SelectDropdown
//               buttonStyle={styles.buttonSelectStyle}
//               buttonTextStyle={{ fontSize: 18 }}
//               defaultButtonText=""
//               data={types}
//               onSelect={(selectedItem) => {
//                 onChangefurnitureTypes(selectedItem);
//               }}
//               buttonTextAfterSelection={(selectedItem, index) => {
//                 return selectedItem;
//               }}
//               rowTextForSelection={(item, index) => {
//                 return item;
//               }}
//             /> */}

//             <Text style={styles.itemStyle}>Monthly rent price </Text>
//             <TextInput
//               style={styles.inputSearch}
//               value={getDetail.price}
//               onChangeText={(value) => onChangeprice(value)}
//             />

//             <Text style={styles.itemStyle}>Bedrooms </Text>
//             <TextInput
//               style={styles.inputSearch}
//               value={getDetail.bedroom}
//               onChangeText={(value) => onChangebedroom(value)}
//             />

//             <Text style={styles.itemStyle}>Notes </Text>
//             <TextInput
//               style={styles.inputSearch}
//               value={getDetail.note}
//               onChangeText={(value) => onChangenote(value)}
//             />

//             <Text style={styles.itemStyle}>Property type </Text>
//             <TextInput
//               style={styles.inputSearch}
//               value={getDetail.prototypes}
//               onChangeText={(value) => onChangeprototypes(value)}
//             />

//             <View style={styles.list}>
//               <TouchableOpacity
//                 style={{ paddingHorizontal: 10, marginTop: 10 }}
//                 onPress={Create}
//               >
//                 <View
//                   style={{
//                     height: 30,
//                     borderRadius: 6,
//                     backgroundColor: "#87CEEB",
//                     justifyContent: "center",
//                     width: 100,
//                     paddingHorizontal: 10,
//                   }}
//                 >
//                   <Text style={{ ...TEXT, fontSize: 20 }}>Update</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     height: 110,
//     backgroundColor: "#dcdcdc",
//     // justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   checkbox: {
//     alignSelf: "center",
//   },
//   headerFilter: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     flex: 1,
//   },
//   buttonSelectStyle: {
//     backgroundColor: "white",
//     height: 40,
//     width: "47%",
//     borderRadius: 10,
//     borderColor: "#757575",
//     borderWidth: 1,
//     borderStyle: "solid",
//   },
//   headerSearch: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     flex: 1,
//   },
//   inputSearch: {
//     height: 40,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#e3e3e3",
//     backgroundColor: "#fff",
//     width: "100%",
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   iconSearch: {
//     position: "absolute",
//     left: 10,
//   },
//   wrapper: {
//     height: 40,
//     marginTop: 10,
//     marginBottom: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10,
//     backgroundColor: "#FA8072",
//   },
//   contentWrapper: {
//     width: "70%",
//     backgroundColor: "yellow",
//     height: 100,
//   },
//   buttonSignInGoogle: {
//     height: 30,
//     width: 80,
//     borderRadius: 5,
//     backgroundColor: "#87CEEB",
//     justifyContent: "center",
//   },
//   buttonLoginText: {
//     ...TEXT,
//     fontSize: 20,
//   },
//   list: {
//     paddingHorizontal: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     flex: 1,
//     right: 10,
//   },
//   itemStyle: {
//     paddingHorizontal: 10,
//     marginTop: 10,
//   },
// });

// export default Create;

import axios from "axios";
import qs from "qs";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

function Create({ navigation }) {
  const [propertyType, setPropertyType] = useState();
  const [furniture, setFurniture] = useState();
  const [language, setLanguage] = useState(false);
  function Create(values) {
    const URL_UPDATE_BY_ID =
      "https://615c94d9c29813001773626d.mockapi.io/api/native/todo/products";
    axios
      .post(
        URL_UPDATE_BY_ID,
        qs.stringify(
          {
            name: values.name,
            datetime: dateOfBirth,
            furnitureTypes: values.furnitureTypes,
            price: values.price,
            bedroom: values.bedroom,
            note: values.note,
            prototypes: values.prototypes,
          }
          // values
        ),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        alert("Create is success")
        navigation.push("Home");
      });
  }

  const [dateOfBirth, setDateOfBirth] = useState("");
  const checkValue = (str, max) => {
    if (str.charAt(0) !== "0" || str == "00") {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? "0" + num
          : num.toString();
    }
    return str;
  };

  const handleDateOfBirth = (value) => {
    var input = value;
    let currentYear = new Date().getFullYear();
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split("/").map(function (v) {
      return v.replace(/\D/g, "");
    });
    if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[1]) values[1] = checkValue(values[1], 12);
    if (values[2]) values[2] = checkValue(values[2], currentYear);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + "/" : v;
    });
    value = output.join("").substr(0, 14);
    setDateOfBirth(value);
  };

  const changeLanguageVN = () => {
    setLanguage(true);
  };
  const changeLanguageEN = () => {
    setLanguage(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.buttonSignInGoogle}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonLoginText}>
            {language === true ? "Trở lại" : "Back"}
          </Text>
        </TouchableOpacity>

        <ScrollView horizontal={true} style={styles.containerHeader}>
          <Text
            style={{ fontSize: 22, padding: 14, marginLeft: 30, color: "#fff" }}
          >
            {language === true ? "Màn hình tạo" : "Create screen"}
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
      <KeyboardAwareScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={50}
        enableOnAndroid={true}
      >
        <Formik
          initialValues={defaultForm}
          onSubmit={(values) => Create(values)}
          validationSchema={validationSchemaForm}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={styles.itemStyle}>
                {language === true ? "Tên người tạo" : "Name of the reporter"}
              </Text>
              <TextInput
                style={styles.inputSearch}
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                placeholder="Name..."
              />
              {touched.name && errors.name && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {errors.name}
                </Text>
              )}

              <Text style={styles.itemStyle}>
                {language === true ? "Ngày tháng" : "DateTime"}
              </Text>
              <TextInput
                label="Input Date Time"
                value={dateOfBirth}
                placeholder={"DD/MM/YYYY"}
                underlineColor={"#FFFFFF"}
                selectionColor={"#000"}
                keyboardType="number-pad"
                maxLength={14}
                returnKeyType="done"
                spellCheck={false}
                autoCorrect={false}
                style={styles.inputSearch}
                onChangeText={(val) => handleDateOfBirth(val)}
              />
              {!dateOfBirth && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  Please datetime required!
                </Text>
              )}

              <Text style={styles.itemStyleTypes}>
                {language === true ? "Loại tài sản" : "Property types"}
              </Text>
              <View style={styles.textAreaContainer} >
              <RNPickerSelect
                onValueChange={(value) => {
                  values.furnitureTypes = value;
                  setPropertyType(value);
                }}
                items={[
                  { label: "Flat", value: "Flat" },
                  { label: "House", value: "House" },
                  { label: "Bungalow", value: "Bungalow" },
                ]}
                placeholder={{ label: "Select...", value: "" }}
                style={{ inputAndroid: { color: "black" } }}
              />
              </View>
              {!propertyType && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {errors.furnitureTypes}
                </Text>
              )}
              <Text style={styles.itemStyleTypes}>
                {language === true ? "Loại nội thất" : "Furniture type"}
              </Text>              
              <View style={styles.textAreaContainer} >
              <RNPickerSelect
                onValueChange={(value) => {
                  values.prototypes = value;
                  setFurniture(value);
                }}
                items={[
                  { label: "Furnished", value: "Furnished" },
                  { label: "Unfurnished", value: "Unfurnished" },
                  { label: "Part Furnished", value: "Part Furnished" },
                ]}
                placeholder={{ label: "Select...", value: "" }}
                style={{
                  inputAndroid: { color: "black" },
                  marginBottom: 10,
                }}
              />
              </View>
              {!furniture && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {errors.prototypes}
                </Text>
              )}

              <Text style={styles.itemStyleTypes}>
                {language === true
                  ? "Giá thuê hàng tháng"
                  : "Monthly rent price"}
              </Text>
              <TextInput
                style={styles.inputSearch}
                value={values.price}
                onChangeText={handleChange("price")}
                onBlur={() => setFieldTouched("price")}
                keyboardType="numeric"
                placeholder="Price..."
              />
              {touched.price && errors.price && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {errors.price}
                </Text>
              )}

              <Text style={styles.itemStyle}>
                {language === true ? "Phòng ngủ" : "Bedrooms"}
              </Text>
              <TextInput
                style={styles.inputSearch}
                value={values.bedroom}
                onChangeText={handleChange("bedroom")}
                onBlur={() => setFieldTouched("bedroom")}
                placeholder="Bedrooms..."
              />
              {touched.bedroom && errors.bedroom && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {errors.bedroom}
                </Text>
              )}

              <Text style={styles.itemStyle}>
                {language === true ? "Ghi chú" : "Notes"}
              </Text>
              <TextInput
                style={styles.inputErea}
                value={values.note}
                onChangeText={handleChange("note")}
                onBlur={() => setFieldTouched("note")}
                numberOfLines={10}
                multiline={true}
                underlineColorAndroid="transparent"
                placeholder="Notes..."
              />
              {touched.note && errors.note && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {errors.note}
                </Text>
              )}
              <Button
                style={styles.buttonSignInGoogle}
                title="Submit"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export const defaultForm = {
  name: "",
  furnitureTypes: "",
  price: "",
  bedroom: "",
  note: "",
  prototypes: "",
};

export const validationSchemaForm = yup.object().shape({
  name: yup.string().required("Please, provide your name!")
  .min(8, "Please input min 8 character!")
  .max(28, "Max character 28"),
  furnitureTypes: yup.string().required("Please, provide prototypes Types!"),
  price: yup
    .number()
    .required("Please, provide number!")
    .typeError("You Must Specify a Number!")
    .min(0, "Invalid Price!"),
  bedroom: yup.string().required("Please, provide number!"),
  note: yup
  .string().required("Please, provide note min 5 character!")
  .min(30, "Please input min 30 character!")
  .max(5000, "Max character 5000"),
  prototypes: yup.string().required("Please, provide furniture!"),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "#FA8072",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  header: {
    height: 110,
    backgroundColor: "#dcdcdc",
    // justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: "#e3e3e3",
  },
  checkbox: {
    alignSelf: "center",
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
  content: {
    padding: 20,
    backgroundColor: "#f9f9f9",
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
  inputErea: {
    height: 150,
    justifyContent: "flex-start",
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
  wrappers: {
    height: 40,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#FA8072",
  },
  contentWrapper: {
    width: "70%",
    backgroundColor: "yellow",
    height: 100,
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
    position: "absolute",
  },
  itemStyle: {
    paddingHorizontal: 10,
    // marginTop: 10,
  },
  itemStyleTypes: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  TextChangeMode: {
    ...TEXT,
    fontSize: 14,
    lineHeight: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});

export default Create;

