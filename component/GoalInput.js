import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";
import React from "react";

const GoalInput = ({
  goal,
  handleChange,
  handleSubmit,
  isAddMode,
  handleCancel,
}) => {
  return (
    <Modal visible={isAddMode} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Add Goal"
          onChangeText={handleChange}
          value={goal}
        />
        <View style={styles.button}>
          <View style={styles.buttonWidth}>
            <Button title="Cancel" onPress={handleCancel} color="red" />
          </View>
          <View style={styles.buttonWidth}>
            <Button title="Add" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  buttonWidth: {
    width: "40%",
  },
});

export default GoalInput;
