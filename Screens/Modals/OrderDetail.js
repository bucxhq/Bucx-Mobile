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
import HorizontalLine from "../../custom/HorinzontalLine";
import { useFonts } from "expo-font";

const OrderDetail = ({ closeOrderModal, orderDetailModal }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={orderDetailModal}
      onRequestClose={closeOrderModal}
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
            <TouchableOpacity onPress={closeOrderModal}>
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
                Order Details
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
                    You Pay
                  </Text>
                  <Text
                    style={{
                      color: "#3A3A3A",
                      fontSize: 16,
                      fontWeight: "500",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    N355,700
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
                    You Receive
                  </Text>
                  <Text
                    style={{
                      color: "#3A3A3A",
                      fontSize: 16,
                      fontWeight: "500",
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    $244.67
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
                        fontFamily: "ClashGrotesk-Bold",
                        fontWeight: "400",
                      }}
                    >
                      Fee
                    </Text>
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      1% (N3557)
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
                      Total Cost
                    </Text>
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      N359,257
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
                        fontFamily: "ClashGrotesk-Bold",
                        fontWeight: "400",
                      }}
                    >
                      Processing time
                    </Text>
                    <Text
                      style={{
                        color: "#3A3A3A",
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      1-5 mins
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
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
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({});
