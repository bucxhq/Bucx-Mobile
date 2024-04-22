import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons/";
import TopUpViaOtherMeans from "./TopUpViaOtherMeans";
import { useFonts } from "expo-font";

const TopUp = ({ modalVisible, closeModal }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [otherMeansModal, setOtherMeansModal] = useState(false);
  const openViaOtherMeansModal = () => {
    setOtherMeansModal(true);
  };
  const closeViaOtherMeansModal = () => {
    setOtherMeansModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
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
          style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
        >
          <View
            style={{
              backgroundColor: "white",
              // padding: 20,
              borderRadius: 10,
              width: 250,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#171717",
                  fontSize: 24,
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Top-Up
              </Text>
            </View>
            <TouchableOpacity onPress={closeModal}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                <Ionicons name="close-sharp" size={30} color="#666666" />
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                borderColor: "#171717",
                borderWidth: 1,
                borderRadius: 100,
                width: 162,
                paddingTop: 3,
                paddingRight: 3,
                paddingBottom: 3,
                paddingLeft: 3,
                backgroundColor: "#D5B2FF",
              }}
            >
              <Text style={styles.bal_icon}>💰</Text>
              <Text style={styles.bal}>Balance: $34,456</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      color: "#000000",
                      fontWeight: "500",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    $25
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      color: "#000000",
                      fontWeight: "500",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    $100
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      color: "#000000",
                      fontFamily: "ClashGrotesk-Bold",
                      fontWeight: "500",
                    }}
                  >
                    $250
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openViaOtherMeansModal}
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#D0FCEA",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      color: "#000000",
                      fontFamily: "ClashGrotesk-Bold",
                      fontWeight: "500",
                    }}
                  >
                    Other
                  </Text>
                  {otherMeansModal && (
                    <TopUpViaOtherMeans
                      closeViaOtherMeansModal={closeViaOtherMeansModal}
                      otherMeansModal={otherMeansModal}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: "center" }}>
                  Works with your Naira cards, and crypto
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TopUp;

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
    color: "#171717",
    fontFamily: "ClashGrotesk-Bold",
  },
});
