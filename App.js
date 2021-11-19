import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [goal, setGoals] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleChange = (enterValue) => {
    setGoals(enterValue);
  };

  const handleSubmit = () => {
    setGoalList((currentGoal) => [
      ...currentGoal,
      { key: Math.random().toString(), value: goal },
    ]);
    setGoals("");
    setIsAddMode(false);
  };

  const onDelete = async (id) => {
    return setGoalList((currentGoal) => {
      return currentGoal.filter((goal) => goal.key !== id);
    });
  };

  const handleCancel = async () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        handleCancel={handleCancel}
        isAddMode={isAddMode}
        goal={goal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <FlatList
        data={goalList}
        renderItem={(itemdata) => (
          <GoalItem
            id={itemdata.item.key}
            onDelete={onDelete}
            title={itemdata.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
