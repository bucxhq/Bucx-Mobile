import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons/";
import WithdrawalTwo from "./WithdrawalTwo";
import { useFonts } from "expo-font";

const WithdrawOne = ({ withdrawOneModal, closeWithdrawModalOne }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [withdrawalModalTwo, setWithDrwalModalTwo] = useState(false);

  const openWithDrawalTwo = () => {
    setWithDrwalModalTwo(true);
  };
  const closeWithDrawalTwo = () => {
    setWithDrwalModalTwo(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={withdrawOneModal}
      onRequestClose={closeWithdrawModalOne}
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
                  fontSize: 26,
                  fontWeight: "500",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Withdraw Bucks
              </Text>
            </View>
            <TouchableOpacity onPress={closeWithdrawModalOne}>
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
            <View>
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 16,
                  fontWeight: "400",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Enter amount
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <View>
                <TouchableOpacity
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 90,
                    borderRadius: 17,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",

                    padding: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#000000",
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      You withdraw
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,

                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={require("../../../assets/images/nigeria_logo.png")}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 26,
                          color: "#000000",
                          fontFamily: "ClashGrotesk-Bold",
                          fontWeight: "500",
                        }}
                      >
                        $24.67
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#5F5F5F",
                      fontWeight: "400",
                      textAlign: "center",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    1 USDC = NGN 1,449.13
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 90,
                    borderRadius: 17,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    padding: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#000000",
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      You Receive
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,

                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={require("../../../assets/images/usdc_logo.png")}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 26,
                          color: "#000000",
                          fontWeight: "500",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        35,700
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openWithDrawalTwo}
                  style={{
                    width: 321,
                    height: 56,
                    backgroundColor: "#14F195",
                    borderRadius: 1000,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#171717",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 25,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    Continue
                  </Text>
                  {withdrawalModalTwo && (
                    <WithdrawalTwo
                      closeWithDrawalTwo={closeWithDrawalTwo}
                      withdrawalModalTwo={withdrawalModalTwo}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WithdrawOne;

const styles = StyleSheet.create({});
