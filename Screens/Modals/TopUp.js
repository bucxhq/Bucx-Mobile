import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TopUp = ({ modalVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
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
          <Text>This is the bottom modal content</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={{ fontSize: 18, color: "blue", marginTop: 10 }}>
              Close Modal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TopUp;

const styles = StyleSheet.create({});
