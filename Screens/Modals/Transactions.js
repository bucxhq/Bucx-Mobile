import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons/";
import { useFonts } from "expo-font";

const Transactions = ({ closeTransactionModal, transactionsModal }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={transactionsModal}
      onRequestClose={closeTransactionModal}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Transaction History</Text>
            <TouchableOpacity onPress={closeTransactionModal}>
              <Ionicons name="close-sharp" size={30} color="#666666" />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#666666",
                  fontFamily: "ClashGrotesk-Bold",
                }}
              >
                Today
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#171717",
                  borderRadius: 14,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",

                    gap: 8,
                  }}
                >
                  <Image
                    source={require("../../assets/images/withdrawal.png")}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Seun Bayo
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      14:16, Mar 24, 2024
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#D4321C",
                      fontWeight: "500",
                      fontSize: 16,
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    -$24
                  </Text>
                  <Text
                    style={{
                      color: "#888888",
                      fontWeight: "400",
                      fontSize: 14,
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    NGN 33,650
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 25 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    color: "#666666",
                    fontFamily: "ClashGrotesk-Bold",
                  }}
                >
                  Yesterday
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#171717",
                    borderRadius: 14,
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      gap: 8,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/withdrawal_2.png")}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        Withdrawal
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        14:16, Mar 24, 2024
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#8E55D4",
                        fontWeight: "500",
                        fontSize: 16,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      -$54
                    </Text>
                    <Text
                      style={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      NGN 33,650
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#171717",
                    borderRadius: 14,
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      gap: 8,
                    }}
                  >
                    <Image source={require("../../assets/images/from.png")} />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        From Mahmudul Ha...
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        14:16, Mar 24, 2024
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#0DA163",
                        fontWeight: "500",
                        fontSize: 16,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      +$24
                    </Text>
                    <Text
                      style={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      NGN 33,650
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#171717",
                    borderRadius: 14,
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      gap: 8,
                    }}
                  >
                    <Image source={require("../../assets/images/topUp.png")} />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        Top-Up
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        14:16, Mar 24, 2024
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#0DA163",
                        fontWeight: "500",
                        fontSize: 16,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      +$424
                    </Text>
                    <Text
                      style={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      NGN 33,650
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ marginTop: 25 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    color: "#666666",
                    fontFamily: "ClashGrotesk-Bold",
                  }}
                >
                  Mar 24, 2024
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#171717",
                    borderRadius: 14,
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      gap: 8,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/withdrawal_2.png")}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        Withdrawal
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        14:16, Mar 24, 2024
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#8E55D4",
                        fontWeight: "500",
                        fontSize: 16,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      -$54
                    </Text>
                    <Text
                      style={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      NGN 33,650
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#171717",
                    borderRadius: 14,
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      gap: 8,
                    }}
                  >
                    <Image source={require("../../assets/images/topUp.png")} />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        Top-Up
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        14:16, Mar 24, 2024
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#0DA163",
                        fontWeight: "500",
                        fontSize: 16,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      +$24
                    </Text>
                    <Text
                      style={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      NGN 33,650
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#171717",
                    borderRadius: 14,
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      gap: 8,
                    }}
                  >
                    <Image source={require("../../assets/images/topUp.png")} />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        Top-Up
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        14:16, Mar 24, 2024
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#0DA163",
                        fontWeight: "500",
                        fontSize: 16,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      +$424
                    </Text>
                    <Text
                      style={{
                        color: "#888888",
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      NGN 33,650
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Transactions;

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
    width: "95%",
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
    fontFamily: "ClashGrotesk-Bold",
    marginBottom: 10,
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
    fontFamily: "ClashGrotesk-Bold",
    fontWeight: "500",
  },
});
