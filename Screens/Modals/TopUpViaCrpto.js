import {
  Alert,
  Clipboard,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
// import Clipboard from "@react-native-clipboard/clipboard";
import { Ionicons } from "@expo/vector-icons/";
import { useFonts } from "expo-font";

const TopUpViaCrpto = ({ closeViaWalletModal, viaWallet }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [isClosed, setIsClosed] = useState(false);
  const copyToClipboard = (textToCopy) => {
    Clipboard.setString(textToCopy);
    Alert.alert("Wallet Address", `${addr} has been copied to clipboard.`);
    setIsClosed(true); // Close the modal
  };

  const addr = "qwertyuipkknujvubvu";
  const firstSixWrds = addr.substring(0, 6);
  const lasrSixWrds = addr.substring(addr.length - 6);
  const shortendAddress = `${firstSixWrds}...${lasrSixWrds}`;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={viaWallet}
      onRequestClose={closeViaWalletModal}
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
              <View>
                <Text
                  style={{
                    color: "#5F5F5F",
                    fontSize: 16,
                    fontWeight: "400",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    fontFamily: "ClashGrotesk-Bold",
                  }}
                >
                  Add from crypto wallet
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={closeViaWalletModal}>
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
                /*  alignItems: "center",
                justifyContent: "center", */
              }}
            ></View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Image source={require("../../assets/images/qrcode.png")} />
            </View>
            <View style={{ marginTop: 20, width: 290 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  textAlign: "center",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                {shortendAddress}
              </Text>
            </View>
            <View style={{ marginTop: 20, width: 220 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "400",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Send USDC on Solana from another wallet address to this address
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity
                onPress={() => copyToClipboard(shortendAddress)}
                style={{
                  width: 300,
                  height: 56,
                  borderRadius: 1000,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#000000",
                  backgroundColor: "#14F195",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    Copy wallet address
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TopUpViaCrpto;

const styles = StyleSheet.create({});
