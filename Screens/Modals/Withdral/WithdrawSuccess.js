import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons/";
import { useFonts } from "expo-font";

const WithdrawSuccess = ({ closeWithdrwaSuccess, withdrawSuccessModal }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={withdrawSuccessModal}
      onRequestClose={closeWithdrwaSuccess}
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
              <Image
                style={{ position: "absolute", top: -80, left: 120 }}
                source={require("../../../assets/images/succ_withdraw.png")}
              />
            </View>
            <TouchableOpacity onPress={closeWithdrwaSuccess}>
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
                  fontSize: 14,
                  fontWeight: "400",
                  textAlign: "center",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Withdrawal Successful
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 32,
                  fontWeight: "600",
                  textAlign: "center",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                N125,000
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <View>
                <Text
                  style={{
                    fontWeight: "400",
                    fontFamily: "ClashGrotesk-Bold",
                    fontSize: 14,
                    color: "#3A3A3A",
                    textAlign: "center",
                  }}
                >
                  Some cool bucks is on it’s way to{" "}
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 14,
                      color: "#000000",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    {" "}
                    Adaku Obi John
                  </Text>{" "}
                  and is expected to arrive in 5 minutes subject to notification
                  by the bank.
                </Text>
                <TouchableOpacity
                  onPress={closeWithdrwaSuccess}
                  style={{
                    width: 321,
                    alignItems: "center",
                    justifyContent: "center",
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
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WithdrawSuccess;

const styles = StyleSheet.create({});
