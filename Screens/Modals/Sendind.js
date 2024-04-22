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
import { useFonts } from "expo-font";

const Sendind = ({ SendcloseModal, sendingModalVisible }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [txt, setTxt] = useState("");
  const [confimModal, setConfimModal] = useState(false);

  const openConfirmModal = () => {
    setConfimModal(true);
  };
  const closeConfimModal = () => {
    setConfimModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={sendingModalVisible}
      onRequestClose={SendcloseModal}
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
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                💸
              </Text>
              <Text
                style={{
                  color: "#171717",
                  fontSize: 24,
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Send Funds
              </Text>
            </View>
            <TouchableOpacity onPress={SendcloseModal}>
              <Text
                style={{
                  fontSize: 18,
                  color: "blue",
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
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    fontFamily: "ClashGrotesk-Bold",
                  }}
                >
                  Slazenger Jackson
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    fontFamily: "ClashGrotesk-Bold",
                  }}
                >
                  slazengerjackson@gmail.com
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: "500",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                $345
              </Text>
            </View>
            <View style={{ marginTop: 50 }}>
              <TextInput
                onChangeText={(e) => setTxt(e)}
                value={txt}
                style={styles.containerText}
                placeholder={`What’s this for? (optional) ${
                  txt ? <Text>🥳</Text> : <Text>🙃</Text>
                }`}
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity
                style={customWideBtn}
                onPress={openConfirmModal}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={styles.tabText}>💸</Text>
                  <Text style={styles.tabText}>Send $345</Text>
                </View>
                {confimModal && (
                  <Confirm
                    img={
                      <Image
                        width="100%"
                        height="100%"
                        source={require("../../assets/images/sender.png")}
                      />
                    }
                    head={"Slazenger Jackson"}
                    desc={
                      "A magical link is on its way via email, granting them the power to pay you with Bucx."
                    }
                    closeConfimModal={closeConfimModal}
                    confimModal={confimModal}
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

export default Sendind;

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
    fontFamily: "ClashGrotesk-Bold",
    fontWeight: "500",
  },
  tabText1: {
    fontSize: 27,
    fontFamily: "ClashGrotesk-Bold",
    fontWeight: "500",
  },
});
