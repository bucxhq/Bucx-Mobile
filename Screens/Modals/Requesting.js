import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons/";
import { customWideBtn } from "../../custom/customStyles";
import Confirm from "./Confirm";
import HoldTight from "./HoldTight";

const Requesting = ({ requestingcloseModal, requestmodalVisible }) => {
  const [holdModal, setHoldModal] = useState(false);

  const openHoldModal = () => {
    setHoldModal(true);
  };
  const closeHoldModal = () => {
    setHoldModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={requestmodalVisible}
      onRequestClose={requestingcloseModal}
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
              // width: 356,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
              }}
            >
              <Text
                style={{
                  color: "#171717",
                  fontSize: 24,
                }}
              >
                🤑
              </Text>
              <Text
                style={{
                  color: "#171717",
                  fontSize: 24,
                }}
              >
                Request Funds
              </Text>
            </View>
            <TouchableOpacity onPress={requestingcloseModal}>
              <Text style={{ fontSize: 18, color: "blue", marginTop: 10 }}>
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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#171717",
                  borderRadius: 100,
                }}
              >
                <Image
                  width="100%"
                  height="100%"
                  source={require("../../assets/images/sender.png")}
                />
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Slazenger Jackson
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  slazengerjackson@gmail.com
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 50, fontWeight: "500" }}>$345</Text>
            </View>
            <View style={{ marginTop: 50 }}>
              <TextInput
                style={styles.containerText}
                placeholder="What’s this for? (optional) 🙃"
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity style={customWideBtn} onPress={openHoldModal}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={styles.tabText}>💸</Text>
                  <Text style={styles.tabText}>Request $345</Text>
                </View>
                {holdModal && (
                  <HoldTight
                    closeHoldModal={closeHoldModal}
                    req="Request Sent"
                    holdModal={holdModal}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Requesting;

const styles = StyleSheet.create({
  containerText: {
    width: 306,
    height: 56,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    borderRadius: 14,
    textAlign: "center",
    position: "relative",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
  },
  tabText1: {
    fontSize: 27,
    fontWeight: "500",
  },
});
