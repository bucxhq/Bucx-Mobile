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
import HorizontalLine from "../../custom/HorinzontalLine";
import WithdrawSuccess from "./Withdral/WithdrawSuccess";
import { useFonts } from "expo-font";

const ConfirmDetails = ({ closeConfirmDetail, confirmDetailModal }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [withdrawSuccessModal, setWithdrawSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleRequest = () => {
    setLoading(true);
  };

  const openWithdrwaSuccess = () => {
    setWithdrawSuccessModal(true);
  };
  const closeWithdrwaSuccess = () => {
    setWithdrawSuccessModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={confirmDetailModal}
      onRequestClose={closeConfirmDetail}
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
                source={require("../../assets/images/order_detail_img.png")}
              />
            </View>
            <TouchableOpacity onPress={closeConfirmDetail}>
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
                  color: "#000000",
                  fontSize: 26,
                  fontWeight: "500",
                  textAlign: "center",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Confirm Details
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "#3A3A3A",
                      fontSize: 16,
                      fontWeight: "400",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    Amount to withdraw
                  </Text>
                  <Text
                    style={{
                      color: "#3A3A3A",
                      fontSize: 16,
                      fontWeight: "500",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    $125
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#3A3A3A",
                      fontSize: 16,
                      fontWeight: "400",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    You will receive
                  </Text>
                  <Text
                    style={{
                      color: "#3A3A3A",
                      fontSize: 16,
                      fontWeight: "500",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    N125,000
                  </Text>
                </View>
                <HorizontalLine />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Bank
                    </Text>
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Kuda Bank
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Account
                    </Text>
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      12******455
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Name
                    </Text>
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Adaku Obi John
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleRequest}
                  style={{
                    width: 321,
                    height: 56,
                    backgroundColor: `${loading ? "#fff" : "#14F195"}`,

                    borderRadius: 1000,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: `${loading ? "#c3c3c3" : "#171717"}`,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 25,
                  }}
                >
                  {loading ? (
                    <ActivityIndicator color="#000000" size={30} />
                  ) : (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Withdraw Bucks
                    </Text>
                  )}
                  {withdrawSuccessModal && (
                    <WithdrawSuccess
                      closeWithdrwaSuccess={closeWithdrwaSuccess}
                      withdrawSuccessModal={withdrawSuccessModal}
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

export default ConfirmDetails;

const styles = StyleSheet.create({});
