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
const RequestFundds = ({ closeRequestModal, requestmodalVisible }) => {
  const [requestingModal, setRequestingModal] = useState(false);
  const requestingopenModal = () => {
    setRequestingModal(true);
  };

  const requestingcloseModal = () => {
    closeRequestModal();
    setRequestingModal(false);
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
                    }}
                  >
                    🤑
                  </Text>
                  <Text
                    style={{
                      color: "#171717",
                      fontSize: 24,
                    }}
                  >
                    Request Funds
                  </Text>
                </View>
                <TouchableOpacity onPress={requestingcloseModal}>
                  <Text style={{ fontSize: 18, color: "blue", marginTop: 10 }}>
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
                <Text style={{ fontWeight: "500", fontSize: 18 }}>
                  Recent Recipients
                </Text>
                <View style={{ marginTop: 10 }}>
                  {/*   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                            source={require("../assets/images/person_1.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_3.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_1.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_2.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_3.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_4.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_5.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_2.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
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
                            source={require("../assets/images/person_5.png")}
                          />
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
                          Seun
                        </Text>
                      </View>
                    </View>
                  </ScrollView> */}
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
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                      Recent Transactions
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "400" }}>
                      See all
                    </Text>
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
                          <Text style={{ fontSize: 16, fontWeight: "500" }}>
                            Seun Bayo
                          </Text>
                          <Text style={{ fontSize: 14, fontWeight: "400" }}>
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
                          }}
                        >
                          -$24
                        </Text>
                        <Text
                          style={{
                            color: "#888888",
                            fontWeight: "400",
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
                          source={require("../../assets/images/withdrawal_2.png")}
                        />
                        <View>
                          <Text style={{ fontSize: 16, fontWeight: "500" }}>
                            Withdrawal
                          </Text>
                          <Text style={{ fontSize: 14, fontWeight: "400" }}>
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
                          }}
                        >
                          -$54
                        </Text>
                        <Text
                          style={{
                            color: "#8E55D4",
                            fontWeight: "400",
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
                          <Text style={{ fontSize: 16, fontWeight: "500" }}>
                            From Mahmudul Ha...
                          </Text>
                          <Text style={{ fontSize: 14, fontWeight: "400" }}>
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
                          }}
                        >
                          +$24
                        </Text>
                        <Text
                          style={{
                            color: "#8E55D4",
                            fontWeight: "400",
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
                          source={require("../../assets/images/topUp.png")}
                        />
                        <View>
                          <Text style={{ fontSize: 16, fontWeight: "500" }}>
                            Top-Up
                          </Text>
                          <Text style={{ fontSize: 14, fontWeight: "400" }}>
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
                          }}
                        >
                          +$424
                        </Text>
                        <Text
                          style={{
                            color: "#8E55D4",
                            fontWeight: "400",
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
