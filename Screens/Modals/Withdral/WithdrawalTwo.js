import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import RNPickerSelect from "react-native-picker-select";
import ConfirmDetails from "../ConfirmDetails";
import { useFonts } from "expo-font";

const WithdrawalTwo = ({ closeWithDrawalTwo, withdrawalModalTwo }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });

  const [confirmDetailModal, setConfimDetailModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const banks = [
    { label: "First Bank", value: "first_bank", key: "first_bank" },
    { label: "Fidelity Bank", value: "fidelity_bank", key: "fidelity_bank" },
    { label: "MoniePoint", value: "moniepoint", key: "moniepoint" },
    { label: "Gt Bank", value: "gt_bank", key: "gt_bank" },
    { label: "Access Bank", value: "access_bank", key: "access_bank" },
    { label: "Zenith Bank", value: "zenith_bank", key: "zenith_bank" },
    { label: "U.B.A", value: "uba", key: "uba" },
  ];

  const openConfirmDetail = () => {
    setConfimDetailModal(true);
  };

  const closeConfirmDetail = () => {
    setConfimDetailModal(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={withdrawalModalTwo}
      onRequestClose={closeWithDrawalTwo}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Withdraw Bucks</Text>
            <TouchableOpacity onPress={closeWithDrawalTwo}>
              <Ionicons name="close-sharp" size={30} color="#666666" />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Enter account details correctly</Text>
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 12,
                fontWeight: "500",
                marginBottom: 5,
                fontFamily: "ClashGrotesk-Bold",
              }}
            >
              Select bank
            </Text>

            <View style={styles.pickerContainer}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={banks}
                placeholder={{ label: "Select a bank", value: null }} // Updated placeholder object
                value={selectedValue}
              />
            </View>
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 12,
                fontWeight: "500",
                marginBottom: 5,
                fontFamily: "ClashGrotesk-Bold",
              }}
            >
              Account number
            </Text>
            <View>
              <TextInput
                keyboardType="number-pad"
                placeholder="0123456789"
                style={{
                  borderColor: "#000000",
                  borderWidth: 1,
                  height: 56,
                  borderRadius: 10,
                  fontWeight: "500",
                  fontSize: 16,
                  paddingLeft: 15,
                  fontFamily: "ClashGrotesk-Bold",
                }}
              />
            </View>

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 12,
                fontWeight: "500",
                fontFamily: "ClashGrotesk-Bold",
                marginTop: 18,
                marginBottom: 5,
              }}
            >
              Account name
            </Text>
            <View>
              <TextInput
                placeholder="Enter account name"
                style={{
                  borderColor: "#000000",
                  borderWidth: 1,
                  height: 56,
                  borderRadius: 10,
                  fontWeight: "500",
                  fontSize: 16,
                  paddingLeft: 15,
                  fontFamily: "ClashGrotesk-Bold",
                }}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={openConfirmDetail}>
              <Text style={styles.buttonText}>Continue</Text>
              {confirmDetailModal && (
                <ConfirmDetails
                  closeConfirmDetail={closeConfirmDetail}
                  confirmDetailModal={confirmDetailModal}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  headerText: {
    color: "#171717",
    fontSize: 26,
    fontFamily: "ClashGrotesk-Bold",

    fontWeight: "500",
  },
  content: {},
  label: {
    color: "#5F5F5F",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 10,
    fontFamily: "ClashGrotesk-Bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    marginBottom: 20,
    height: 56,
  },
  button: {
    backgroundColor: "#14F195",
    height: 56,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "ClashGrotesk-Bold",
  },
});

export default WithdrawalTwo;
