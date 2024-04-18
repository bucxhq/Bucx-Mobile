import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons/";
import { customWideBtn, customWideCancel } from "../../custom/customStyles";
import HoldTight from "./HoldTight";

const Confirm = ({ img, head, desc, closeConfimModal, confimModal }) => {
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
      visible={confimModal}
      onRequestClose={closeConfimModal}
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
              borderRadius: 10,
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
                💸
              </Text>
              <Text
                style={{
                  color: "#171717",
                  fontSize: 24,
                }}
              >
                Send Funds
              </Text>
            </View>
            <TouchableOpacity onPress={closeConfimModal}>
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
                {img}
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>{head}</Text>
              </View>
            </View>

            <View style={{ marginTop: 30, width: 302 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                {desc}
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity style={customWideBtn} onPress={openHoldModal}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={styles.tabText}>Confirm</Text>
                </View>
                {holdModal && (
                  <HoldTight
                    closeHoldModal={closeHoldModal}
                    holdModal={holdModal}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={customWideCancel}
                onPress={closeConfimModal}
              >
                <View>
                  <Text
                    style={{
                      color: "#666666",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Cancel
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

export default Confirm;

const styles = StyleSheet.create({
  tabText: {
    color: "#171717",
    fontSize: 16,
    fontWeight: "500",
  },
});
