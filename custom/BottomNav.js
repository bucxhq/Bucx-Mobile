// import {
//   Image,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../Screens/Home";
// import {
//   FontAwesome6,
//   MaterialCommunityIcons,
//   MaterialIcons,
//   FontAwesome,
//   Octicons,
//   Entypo,
// } from "@expo/vector-icons/";
// import { customBtn } from "./customStyles";
// import Send from "../Screens/Send";
// const Tab = createBottomTabNavigator();

// const BottomNav = ({ navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Request"
//         component={Home}
//         options={{
//           tabBarLabel: () => null, // Hide the tab name
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => (
//             <TouchableOpacity style={customBtn}>
//               <View style={styles.tabIconContainer}>
//                 <Image
//                   source={require("../assets/images/money_smile.png")}
//                   style={styles.tabIcon}
//                 />

//                 <Text style={styles.tabText}>Request</Text>
//               </View>
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Send"
//         // component={Send}
//         listeners={({ navigation }) => ({
//           tabPress: (e) => {
//             e.preventDefault();
//             navigation.navigate("Send");
//           },
//         })}
//         options={{
//           tabBarLabel: () => null,
//           tabBarIcon: ({ color, size }) => (
//             <View style={{ alignItems: "center" }}>
//               <Image
//                 source={require("../assets/images/💸.png")}
//                 style={{ width: 24, height: 24, tintColor: color }}
//               />
//               <Text style={{ color }}>Send</Text>
//             </View>
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="Send"
//         // component={Send(modalVisible, openModal, closeModal)}
//          {() => <Send modalVisible={modalVisible} openModal={openModal} closeModal={closeModal} />}
//         options={{
//           tabBarLabel: () => null, // Hide the tab name
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => (
//             <TouchableOpacity style={customBtn} onPress={openModal}>
//               <View style={styles.tabIconContainer}>
//                 <Image
//                   source={require("../assets/images/💸.png")}
//                   style={styles.tabIcon}
//                 />

//                 <Text style={styles.tabText}>Send</Text>
//               </View>
//             </TouchableOpacity>
//           ),
//         }}
//       /> */}
//       <Tab.Screen
//         name="Send"
//         component={() => (
//           <Send
//             modalVisible={modalVisible}
//             openModal={openModal}
//             closeModal={closeModal}
//           />
//         )}
//         options={{
//           tabBarLabel: () => null,
//           tabBarIcon: ({ color, size }) => (
//             <View style={{ alignItems: "center" }}>
//               <Image
//                 source={require("../assets/images/💸.png")}
//                 style={{ width: 24, height: 24, tintColor: color }}
//               />
//               <Text style={{ color }}>Send</Text>
//             </View>
//           ),
//         }}
//       />

//       {/*  {() => (
//         <Send
//           modalVisible={modalVisible}
//           openModal={openModal}
//           closeModal={closeModal}
//         />
//       )} */}
//       {/* </Tab.Screen> */}
//     </Tab.Navigator>
//   );
// };

// export default BottomNav;

// const styles = StyleSheet.create({
//   tabIconContainer: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   tabIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 5,
//   },
//   tabText: {
//     fontSize: 18,
//     fontWeight: "500",
//     // paddingTop: 20,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//   },
// });
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { customBtn } from "./customStyles";
import Send from "../Screens/Send";
import Home from "../Screens/Home";

const Tab = createBottomTabNavigator();

const BottomNav = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Request"
        component={Home}
        options={{
          tabBarLabel: () => null, // Hide the tab name
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity style={customBtn}>
              <View style={styles.tabIconContainer}>
                <Image
                  source={require("../assets/images/money_smile.png")}
                  style={styles.tabIcon}
                />
                <Text style={styles.tabText}>Request</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Send"
        component={Send}
        initialParams={{ modalVisible, openModal, closeModal }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/images/💸.png")}
                style={{ width: 24, height: 24, tintColor: color }}
              />
              <Text style={{ color }}>Send</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
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
