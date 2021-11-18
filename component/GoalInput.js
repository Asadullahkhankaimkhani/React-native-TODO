import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const GoalInput = ({ goal, handleChange, handleSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="Add Goal"
        onChangeText={handleChange}
        value={goal}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
});

export default GoalInput;
