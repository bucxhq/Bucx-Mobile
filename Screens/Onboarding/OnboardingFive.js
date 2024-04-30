import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Magic } from "@magic-sdk/react-native-expo";
import { OAuthExtension } from "@magic-ext/react-native-expo-oauth";

const OnboardingFive = ({ navigation }) => {
  const magic = new Magic("pk_live_C8BD43695BD7E82E", {
    extensions: [new OAuthExtension()],
  });

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        navigation.navigate("Home");
      }
    };
    checkUserLoggedIn();
  }, []);

  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });

  const handleGoogleSignIn = async () => {
    try {
      await magic.oauth.loginWithPopup({
        provider: "google",
        redirectURI: "https://auth.magic.link/v1/oauth2/gRs_gT3y2UuSK4K9DBCKxUSTbhOV-TbseZWqI7jbeQU=/callback",
      });

      navigation.navigate("Home");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

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
            onPress={handleGoogleSignIn}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <Image
                width={24}
                height={24}
                source={require("../../assets/images/google_logo.png")}
              />
              <Text
                style={{
                  color: "#171717",
                  fontWeight: "500",
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "ClashGrotesk-Bold",
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
  txt1_container: {
    width: 258,
  },
  txt1: {
    fontWeight: "600",
    fontSize: 36,
    textAlign: "center",
    fontFamily: "ClashGrotesk-Bold",
    color: "#000000",
  },
  txt2: {
    fontWeight: "400",
    fontSize: 18,
    fontFamily: "ClashGrotesk-Bold",
    textAlign: "center",
    color: "#000000",
  },
  txt2_container: {
    width: 290,
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
    fontFamily: "ClashGrotesk-Bold",
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
