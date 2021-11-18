import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [goal, setGoals] = useState("");
  const [goalList, setGoalList] = useState([]);

  const handleChange = (enterValue) => {
    setGoals(enterValue);
  };

  const handleSubmit = () => {
    setGoalList((currentGoal) => [
      ...currentGoal,
      { key: Math.random().toString(), value: goal },
    ]);
    setGoals("");
  };

  const onDelete = async (id) => {
    return setGoalList((currentGoal) => {
      return currentGoal.filter((goal) => goal.key !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput
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
    padding: 30,
  },
});
