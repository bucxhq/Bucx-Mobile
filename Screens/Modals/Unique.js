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

const Unique = ({
  img,
  head,
  desc,
  btnTxt,
  closeSuccessModal,
  SuccessModal,
}) => {
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
                {/*  <Image
                  width="100%"
                  height="100%"
                  source={require("../../assets/images/🚀.png")}
                /> */}
                {img}
              </View>
              <View>
                <Text style={{ fontSize: 26, fontWeight: "500" }}>{head}</Text>
              </View>
            </View>

            <View style={{ marginTop: 20, width: 220 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                {desc}
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity
                style={customWideBtn}
                onPress={closeSuccessModal}
              >
                <View>
                  <Text style={styles.tabText}>{btnTxt}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Unique;

const styles = StyleSheet.create({
  tabText: {
    color: "#171717",
    fontSize: 16,
    fontWeight: "500",
  },
});
