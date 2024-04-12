import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Send = ({ modalVisible, openModal, closeModal }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <TouchableOpacity onPress={openModal}>
        <Text style={{ fontSize: 18, color: "blue" }}>Open Modal</Text>
      </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    color: "blue",
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
  closeButton: {
    marginTop: 10,
    textAlign: "center",
    color: "blue",
  },
});

export default Send;
