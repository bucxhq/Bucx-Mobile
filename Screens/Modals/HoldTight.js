import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons/";
import { customWideBtn, customWideCancel } from "../../custom/customStyles";
import Unique from "./Unique";
import { useFonts } from "expo-font";

const HoldTight = ({ closeHoldModal, holdModal, req }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [SuccessModal, setSuccessModal] = useState(false);

  const openSuccessModal = () => {
    setSuccessModal(true);
  };
  const closeSuccessModal = () => {
    setSuccessModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={holdModal}
      onRequestClose={closeHoldModal}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 30,
            paddingLeft: 70,
            paddingRight: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <View
              style={{
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#171717",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFE3DB",
                }}
              >
                <Image
                  width="100%"
                  height="100%"
                  source={require("../../assets/images/🚀.png")}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "500",
                    fontFamily: "ClashGrotesk-Bold",
                  }}
                >
                  Hold Tight
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 20, width: 290 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  fontFamily: "ClashGrotesk-Bold",
                  textAlign: "center",
                }}
              >
                Sending your digital dollars on a joyride through the crypto
                cosmos. Fasten your seatbelts; it's a wild, playful journey!
                🚀💸
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity
                onPress={openSuccessModal}
                style={{
                  width: 356,
                  height: 56,
                  borderRadius: 1000,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#C3C3C3",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <View>
                  {/* <Text style={styles.tabText}> <ActivityIndicator size="large" color="blue" /></Text> */}
                  <ActivityIndicator size="large" color="#171717" />
                </View>
                {SuccessModal && (
                  <Unique
                    head={req ? "Request Sent" : "Funds Sent"}
                    desc={
                      "Money's on the move! Crypto-fueled and sent their way! 🚀💸"
                    }
                    btnTxt={"Close ✌️"}
                    img={
                      req ? (
                        <Image
                          width="100%"
                          height="100%"
                          source={require("../../assets/images/money_smile_2.png")}
                        />
                      ) : (
                        <Image
                          width="100%"
                          height="100%"
                          source={require("../../assets/images/sent.png")}
                        />
                      )
                    }
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default HoldTight;

const styles = StyleSheet.create({});
