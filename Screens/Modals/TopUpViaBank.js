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
import OrderDetail from "./OrderDetail";
import { useFonts } from "expo-font";

const TopUpViaBank = ({ closeViaBankModal, viaBank }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  const openOrderModal = () => {
    setOrderDetailModal(true);
  };

  const closeOrderModal = () => {
    setOrderDetailModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={viaBank}
      onRequestClose={closeViaBankModal}
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
                  fontSize: 24,
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Add Funds
              </Text>
            </View>
            <TouchableOpacity onPress={closeViaBankModal}>
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
                Enter amount (1 USDC = NGN 1,250)
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
                      You Pay
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
                      source={require("../../assets/images/nigeria_logo.png")}
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
                        355,700
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#5F5F5F",
                      fontWeight: "400",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    Min. amount - ₦5,000/Max. amount - ₦ 100,000
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
                        fontFamily: "ClashGrotesk-Bold",
                        fontWeight: "500",
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
                      source={require("../../assets/images/usdc_logo.png")}
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
                        244.67
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openOrderModal}
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
                  <Text>Continue</Text>
                  {orderDetailModal && (
                    <OrderDetail
                      closeOrderModal={closeOrderModal}
                      orderDetailModal={orderDetailModal}
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

export default TopUpViaBank;

const styles = StyleSheet.create({});
