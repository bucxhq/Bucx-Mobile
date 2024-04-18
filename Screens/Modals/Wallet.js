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

// import Clipboard from '@react-native-clipboard/clipboard';
const Wallet = ({ closeWalletModal, viewWalletModalVisible }) => {
  const [isClosed, setIsClosed] = useState(false);
  const copyToClipboard = (textToCopy) => {
    Clipboard.setString(textToCopy);
    Alert.alert("Wallet Address", `${addr} has been copied to clipboard.`);
    setIsClosed(true); // Close the modal
  };

  const CloseWallet = () => {
    setIsClosed(false);
    closeWalletModal(); // Optional: Close the modal when the state changes
  };

  const addr = "qwertyuipkknujvubvu";
  const firstSixWrds = addr.substring(0, 6);
  const lasrSixWrds = addr.substring(addr.length - 6);
  const shortendAddress = `${firstSixWrds}...${lasrSixWrds}`;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={viewWalletModalVisible && !isClosed}
      onRequestClose={CloseWallet}
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
            <TouchableOpacity onPress={CloseWallet}>
              <Text style={{ fontSize: 18, color: "blue", marginTop: 10 }}>
                <Ionicons name="close-sharp" size={30} color="#666666" />
              </Text>
            </TouchableOpacity>
            <View
              style={{
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Your USDC Address
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#53524F",
                    textAlign: "center",
                  }}
                >
                  on Solana
                </Text>
              </View>
            </View>
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
                }}
              >
                {shortendAddress}
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
                  borderColor: "#C3C3C3",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "500", fontSize: 16 }}>
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

export default Wallet;

const styles = StyleSheet.create({});
