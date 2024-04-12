import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingThree = ({ navigation }) => {
  return (
    <>
      <SafeAreaView />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "",
            marginTop: 20,
            // width: 29,
            // justifyContent: "flex-end",
            marginLeft: 300,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("OnboardingFour")}
          >
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            borderRadius: "50%",
            marginTop: 10,
          }}
        >
          <View
            style={{ backgroundColor: "#ccc", width: 15, height: 5 }}
          ></View>
          <View
            style={{ backgroundColor: "#ccc", width: 15, height: 5 }}
          ></View>
          <View
            style={{ backgroundColor: "#000000", width: 15, height: 5 }}
          ></View>
          <View
            style={{ backgroundColor: "#ccc", width: 15, height: 5 }}
          ></View>
        </View>
        <View style={styles.txt1_container}>
          <Text style={styles.txt1}>Works with your </Text>
          <Text style={styles.txt1}> Naira Card</Text>
        </View>
        <View style={styles.txt2_container}>
          <Text style={styles.txt2}>
            {" "}
            Buy dollars with your local Naira card and bank account or get paid
            in stablecoin directly on Bucx 🇳🇬 💸
          </Text>
        </View>
        <View>
          <Image source={require("../../assets/images/credit_card.png")} />
        </View>
        <View>
          <Pressable style={styles.pres_btn}>
            <Image source={require("../../assets/images/Vector_Stroke.png")} />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default OnboardingThree;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  txt1_container: {
    width: 258,
  },
  txt1: {
    fontWeight: "600",
    fontSize: 36,
    textAlign: "center",
    color: "#000000",
  },
  txt2: {
    fontWeight: "400",
    fontSize: 18,
    textAlign: "center",
    color: "#000000",
  },
  txt2_container: {
    width: 290,
  },
  pres_btn: {
    backgroundColor: "#171717",
    width: 170,
    height: 56,
    borderRadius: 94,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skip: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#888888",
  },
});
