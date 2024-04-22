import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";
export const PrefixTextField = ({ prefix, ...rest }) => {
  useFonts({
    "ClashGrotesk-Bold": require("../assets/fonts/ClashGrotesk-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.prefixContainer}>
        <Text style={styles.prefix}>{prefix}</Text>
      </View>
      <TextInput {...rest} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: 356,
    height: 56,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#171717",
    borderRadius: 100,
    position: "relative",
  },
  prefix: {
    marginRight: 8,
    fontSize: 16,
    color: "#555",
    fontFamily: "ClashGrotesk-Bold",
    fontWeight: "500",
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "ClashGrotesk-Bold",
  },
});
