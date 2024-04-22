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
import WithdrawOne from "./Withdral/WithdrawOne";
import { useFonts } from "expo-font";

const Account = ({ closeAccountModal, accountModalVisible }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [withdrawOneModal, setWithdrawOneModal] = useState(false);

  const openWithdrawModalOne = () => {
    setWithdrawOneModal(true);
  };
  const closeWithdrawModalOne = () => {
    setWithdrawOneModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={accountModalVisible}
      onRequestClose={closeAccountModal}
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
                Account
              </Text>
            </View>
            <TouchableOpacity onPress={closeAccountModal}>
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
                width: 200,
                padding: 8,
                backgroundColor: "#D5B2FF",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                slazengerjackson@gmail.com
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <View>
                <TouchableOpacity
                  onPress={openWithdrawModalOne}
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 56,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexDirection: "row",
                    gap: 16,
                    padding: 10,
                  }}
                >
                  <Image source={require("../../assets/images/withdraw.png")} />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Withdraw Funds
                    </Text>
                    {WithdrawOne && (
                      <WithdrawOne
                        closeWithdrawModalOne={closeWithdrawModalOne}
                        withdrawOneModal={withdrawOneModal}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  //   onPress={openViaBankModal}
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 56,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexDirection: "row",
                    gap: 16,
                    padding: 10,
                  }}
                >
                  <Image source={require("../../assets/images/twitter.png")} />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Follow us on Twitter
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  //   onPress={openViaBankModal}
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 56,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexDirection: "row",
                    gap: 16,
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/images/support_us.png")}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Support
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  //   onPress={openViaBankModal}
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 56,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexDirection: "row",
                    gap: 16,
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/images/privacy_key.png")}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Privacy Policy
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  //   onPress={openViaBankModal}
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 56,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexDirection: "row",
                    gap: 16,
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/images/back_up_wallet.png")}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Backup Wallet
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Account;

const styles = StyleSheet.create({});
