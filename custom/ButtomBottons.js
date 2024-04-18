import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { customBtn } from "./customStyles";
import Send from "../Screens/Send";
import RequestFundds from "../Screens/Modals/RequestFundds";
import Wallet from "../Screens/Modals/Wallet";

const ButtomBottons = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [requestmodalVisible, setRequestModalVisible] = useState(false);
  const [viewWalletModalVisible, setViewWalletModalVisible] = useState(false);
  const openRequestModal = () => {
    setRequestModalVisible(true);
  };

  const closeRequestModal = () => {
    setRequestModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const openWalletModal = () => {
    setViewWalletModalVisible(true);
  };

  const closeWalletModal = () => {
    setViewWalletModalVisible(false);
  };

  return (
    <View
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        bottom: 0,
        gap: 5,
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <TouchableOpacity style={customBtn} onPress={openRequestModal}>
        <View style={styles.tabIconContainer}>
          <Image
            source={require("../assets/images/money_smile.png")}
            style={styles.tabIcon}
          />
          <Text style={styles.tabText}>Request</Text>
        </View>
        {requestmodalVisible && (
          <RequestFundds
            closeRequestModal={closeRequestModal}
            requestmodalVisible={requestmodalVisible}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={openWalletModal}>
        <View>
          <Image
            source={require("../assets/images/scan_icon.png")}
            // style={{ width: 30 }}
          />
        </View>
        {viewWalletModalVisible && (
          <Wallet
            closeWalletModal={closeWalletModal}
            viewWalletModalVisible={viewWalletModalVisible}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={customBtn} onPress={openModal}>
        <View style={styles.tabIconContainer}>
          <Image
            source={require("../assets/images/💸.png")}
            style={styles.tabIcon}
          />
          <Text style={styles.tabText}>Send</Text>
          {modalVisible && (
            <Send closeModal={closeModal} modalVisible={modalVisible} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtomBottons;

const styles = StyleSheet.create({
  tabIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "500",
    // paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
