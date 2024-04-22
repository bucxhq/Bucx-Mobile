import { View, StyleSheet } from "react-native";

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    marginVertical: 10, // Adjust this value to change the spacing above and below the line
  },
});

export default HorizontalLine;
