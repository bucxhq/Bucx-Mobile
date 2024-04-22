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
import TopUpViaCrpto from "./TopUpViaCrpto";
import TopUpViaBank from "./TopUpViaBank";
import { useFonts } from "expo-font";

const TopUpViaOtherMeans = ({ closeViaOtherMeansModal, otherMeansModal }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [viaWallet, setViaWallet] = useState(false);
  const [viaBank, setViaBank] = useState(false);
  const openViaWalletModal = () => {
    // closeViaOtherMeansModal();
    setViaWallet(true);
  };
  const closeViaWalletModal = () => {
    setViaWallet(false);
  };
  const openViaBankModal = () => {
    // closeViaOtherMeansModal();
    setViaBank(true);
  };
  const closeViaBankModal = () => {
    setViaBank(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={otherMeansModal}
      onRequestClose={closeViaOtherMeansModal}
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
                Top-Up
              </Text>
            </View>
            <TouchableOpacity onPress={closeViaOtherMeansModal}>
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
                Choose method to add funds
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <View>
                <TouchableOpacity
                  onPress={openViaBankModal}
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 70,
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
                    source={require("../../assets/images/transaction.png")}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Card/Bank
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Paystack - Africa
                    </Text>
                  </View>
                  {viaBank && (
                    <TopUpViaBank
                      closeViaBankModal={closeViaBankModal}
                      viaBank={viaBank}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openViaBankModal}
                  style={{
                    marginTop: 10,

                    width: 321,
                    height: 70,
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
                    source={require("../../assets/images/transaction.png")}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Card/Bank
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Ramp - Outside Africa
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openViaWalletModal}
                  style={{
                    width: 321,
                    height: 70,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#000000",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexDirection: "row",
                    gap: 16,
                    padding: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/images/transaction.png")}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000000",
                        fontFamily: "ClashGrotesk-Bold",
                        fontWeight: "500",
                      }}
                    >
                      Crypto Wallet
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#000000",
                        fontFamily: "ClashGrotesk-Bold",
                        fontWeight: "400",
                      }}
                    >
                      No fee
                    </Text>
                  </View>
                  {viaWallet && (
                    <TopUpViaCrpto
                      closeViaWalletModal={closeViaWalletModal}
                      viaWallet={viaWallet}
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

export default TopUpViaOtherMeans;

const styles = StyleSheet.create({});
