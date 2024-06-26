import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtomBottons from "../custom/ButtomBottons";
import TopUp from "./Modals/TopUp";
import Account from "./Modals/Account";
import { useFonts } from "expo-font";

const Home = () => {
  useFonts({
    "ClashGrotesk-Bold": require("../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [accountModalVisible, setAccountModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openAccountModal = () => {
    setAccountModalVisible(true);
  };

  const closeAccountModal = () => {
    setAccountModalVisible(false);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "x"];
  const [pressedValues, setPressedValues] = useState([]);

  const handlePress = (value) => {
    if (value === "x") {
      // Delete the last value from pressedValues
      const updatedPressedValues = pressedValues.slice(0, -1);
      setPressedValues(updatedPressedValues);
    } else {
      // Add the pressed value to pressedValues if it has less than 7 values
      if (pressedValues.length < 7) {
        const updatedPressedValues = [...pressedValues, value];
        setPressedValues(updatedPressedValues);
      }
    }
  };

  return (
    <>
      <SafeAreaView />
      <View
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          height: "100%",
          position: "relative",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 15,
            gap: 80,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              width: 216,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                borderColor: "#171717",
                borderWidth: 1,
                borderRadius: 100,
                width: 162,
                paddingTop: 15,
                paddingRight: 12,
                paddingBottom: 15,
                paddingLeft: 12,
                backgroundColor: "#D5B2FF",
              }}
            >
              <Text style={styles.bal_icon}>💰</Text>
              <Text style={styles.bal}>Balance: $34,456</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => openModal()}>
                <Image source={require("../assets/images/plus.png")} />
              </TouchableOpacity>
              {modalVisible && (
                <TopUp closeModal={closeModal} modalVisible={modalVisible} />
              )}
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={openAccountModal}>
              <Image source={require("../assets/images/usericon.png")} />
              {accountModalVisible && (
                <Account
                  closeAccountModal={closeAccountModal}
                  accountModalVisible={accountModalVisible}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            marginTop: 40,
            marginBottom: 150,
          }}
        >
          {pressedValues.length ? (
            <>
              <Text style={styles.value}>$</Text>
              {pressedValues.map((value, index) => (
                <Text style={styles.value} key={index}>
                  {value}
                </Text>
              ))}
            </>
          ) : (
            <Text style={styles.value}>$0</Text>
          )}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {numbers.map((number) => (
            <TouchableOpacity
              onPressIn={() => {
                this[number].setNativeProps({
                  style: { backgroundColor: "#FFE3DB" },
                }); // Change background color on press
              }}
              onPressOut={() => {
                this[number].setNativeProps({
                  style: { backgroundColor: "#fff" },
                }); // Revert back to original color on release
              }}
              ref={(ref) => (this[number] = ref)}
              key={number}
              style={styles.button}
              onPress={() => handlePress(number)}
            >
              <Text style={styles.btnTxt}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* <BottomNav /> */}
        <ButtomBottons />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bal: {
    fontWeight: "500",
    fontSize: 15,
    color: "#171717",
    fontFamily: "ClashGrotesk-Bold",
  },
  bal_icon: {
    fontWeight: "500",
    fontSize: 18,
    fontFamily: "ClashGrotesk-Bold",
    color: "#171717",
  },
  userIcon: {
    borderColor: "#171717",
    borderWidth: 1,
    borderRadius: 100,
    borderStyle: "solid",
  },
  button: {
    backgroundColor: "#fff",
    width: 109.7,
    height: 60,
    borderRadius: 100,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#171717",
    borderWidth: 1,
    borderStyle: "solid",
  },
  btnTxt: {
    fontSize: 28,
    fontWeight: "500",
    fontFamily: "ClashGrotesk-Bold",
  },
  value: {
    fontSize: 80,
    fontWeight: "500",
    fontFamily: "ClashGrotesk-Bold",
  },
  buttonPressed: {
    backgroundColor: "#FFE3DB",
  },
});
