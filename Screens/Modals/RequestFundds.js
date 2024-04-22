import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { PrefixTextField } from "../../custom/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import Requesting from "./Requesting";
import Transactions from "./Transactions";
import { useFonts } from "expo-font";

const RequestFundds = ({ closeRequestModal, requestmodalVisible }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../../assets/fonts/ClashGrotesk-Bold.ttf"),
  });
  const [requestingModal, setRequestingModal] = useState(false);
  const [transactionsModal, setTransactionsModdal] = useState(false);
  const requestingopenModal = () => {
    setRequestingModal(true);
  };

  const requestingcloseModal = () => {
    closeRequestModal();
    setRequestingModal(false);
  };
  const openTransactionModal = () => {
    setTransactionsModdal(true);
  };

  const closeTransactionModal = () => {
    setTransactionsModdal(false);
  };
  const [txt, setTxt] = useState("");
  return (
    <>
      <SafeAreaView />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
        }}
      >
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
              // width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 30,
                paddingLeft: 70,
                paddingRight: 70,
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
                    🤑
                  </Text>
                  <Text
                    style={{
                      color: "#171717",
                      fontSize: 24,
                      fontFamily: "ClashGrotesk-Bold",
                    }}
                  >
                    Request Funds
                  </Text>
                </View>
                <TouchableOpacity onPress={requestingcloseModal}>
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
              <View style={{ marginTop: 10 }}>
                <PrefixTextField
                  value={txt}
                  onChangeText={(e) => setTxt(e)}
                  prefix="From :"
                  placeholder="Email or wallet address"
                />
                {txt === "" ? (
                  <TouchableOpacity>
                    <Image
                      source={require("../../assets/images/Scanner.png")}
                      style={{ position: "absolute", right: 20, bottom: 15 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <View>
                    <TouchableOpacity onPress={requestingopenModal}>
                      <Image
                        source={require("../../assets/images/Plain.png")}
                        style={{ position: "absolute", right: 20, bottom: 5 }}
                      />
                    </TouchableOpacity>
                    {requestingModal && (
                      <Requesting
                        requestingcloseModal={requestingcloseModal}
                        requestmodalVisible={requestmodalVisible}
                      />
                    )}
                  </View>
                )}
              </View>
              <View style={{ marginTop: 30 }}>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 18,
                    fontFamily: "ClashGrotesk-Bold",
                  }}
                >
                  Recent Recipients
                </Text>
                <View style={{ marginTop: 10, width: 350 }}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View
                      style={{ display: "flex", flexDirection: "row", gap: 10 }}
                    >
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_1.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Seun
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_3.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Fred
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_1.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Ken
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_2.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Titi
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_3.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Osas
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_4.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Alfred
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_5.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Seun
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_2.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Seun
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 70,
                          height: 92,
                          borderRadius: 12,
                          padding: 15,
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "#171717",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "#171717",
                            borderRadius: 100,
                          }}
                        >
                          <Image
                            width="100%"
                            height="100%"
                            source={require("../../assets/images/person_5.png")}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          Seun
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View style={{ marginTop: 20 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "500",
                        fontFamily: "ClashGrotesk-Bold",
                      }}
                    >
                      Recent Transactions
                    </Text>
                    <TouchableOpacity onPress={openTransactionModal}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          fontFamily: "ClashGrotesk-Bold",
                        }}
                      >
                        See all
                      </Text>
                      {transactionsModal && (
                        <Transactions
                          closeTransactionModal={closeTransactionModal}
                          transactionsModal={transactionsModal}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View>
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
                            fontFamily: "ClashGrotesk-Bold",
                            fontSize: 16,
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
                            color: "#D4321C",
                            fontWeight: "500",
                            fontSize: 16,
                            fontFamily: "ClashGrotesk-Bold",
                          }}
                        >
                          -$54
                        </Text>
                        <Text
                          style={{
                            color: "#8E55D4",
                            fontWeight: "400",
                            fontFamily: "ClashGrotesk-Bold",
                            fontSize: 14,
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
                        <Image
                          source={require("../../assets/images/from.png")}
                        />
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
                            color: "#8E55D4",
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
                        <Image
                          source={require("../../assets/images/topUp.png")}
                        />
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
                            color: "#8E55D4",
                            fontWeight: "400",
                            fontFamily: "ClashGrotesk-Bold",
                            fontSize: 14,
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
      </View>
    </>
  );
};

export default RequestFundds;

const styles = StyleSheet.create({});
