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

const OnboardingFive = ({ navigation }) => {
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
        <View style={styles.getStarted}>
          <Text style={styles.getStartedTxt}>Get Started</Text>
        </View>
        <View style={styles.txt1_container}>
          <Text style={styles.txt1}>No More</Text>
          <Text style={styles.txt1}>Seed Phrases</Text>
        </View>
        <View style={styles.txt2_container}>
          <Text style={styles.txt2}>
            Let’s get you started! Sign in with your Google account and get
            access to wallet immediately
          </Text>
        </View>
        <View style={{ width: 362, height: 362 }}>
          <Image
            source={require("../../assets/images/security_lock_key.png")}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.googgleBtn}
            // onPress={() => navigation.navigate("BottomNav")}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <Image
                width={24}
                height={24}
                source={require("../../assets/images/google-logo-9808 1.png")}
              />
              <Text
                style={{
                  color: "#171717",
                  fontWeight: "500",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OnboardingFive;

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
  getStarted: {
    backgroundColor: "#EEE0FF",
    borderWidth: 1,
    display: "flex",
    borderColor: "#000000",
    padding: 2,
    width: 92,
    borderRadius: 100,
    marginTop: 50,
  },
  getStartedTxt: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    color: "#563380",
  },
  googgleBtn: {
    width: 361,
    height: 60,
    borderRadius: 100,
    borderColor: "#171717",
    backgroundColor: "#fff",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
