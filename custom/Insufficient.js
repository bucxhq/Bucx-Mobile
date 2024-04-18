import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons/";
import { customWideBtn, customWideCancel } from "../../custom/customStyles";

const Insufficient = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={SuccessModal}
      onRequestClose={closeSuccessModal}
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
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  width="100%"
                  height="100%"
                  source={require("../../assets/images/insufficient_fund.png")}
                />
              </View>
              <View>
                <Text style={{ fontSize: 26, fontWeight: "500" }}>Top Up!</Text>
              </View>
            </View>

            <View style={{ marginTop: 20, width: 220 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#3A3A3A",
                }}
              >
                You don’t have sufficient funds in your wallet to complete this
                transaction.
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity
                style={customWideBtn}
                onPress={closeSuccessModal}
              >
                <View>
                  <Text style={styles.tabText}>Add Funds</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Insufficient;

const styles = StyleSheet.create({});
