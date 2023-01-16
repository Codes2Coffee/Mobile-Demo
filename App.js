import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { appStyles } from './styles/mainStyle';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([]);
  const handleGoalChange = (goal) =>{
    setGoalInput(goal);
  }
  const handleAddGoal = () =>{
    setGoals((goal)=>[...goal, goalInput])
    console.log(goals)
  }
  return (
    <View style={appStyles.container}>
      <View style={appStyles.topContainer}>
        <TextInput onChangeText={handleGoalChange} placeholder='Enter Goal'/>
        <Button onPress={handleAddGoal} title='Add'/>
      </View>
      <View style={appStyles.buttomContainer}>
        <Text>Set of goals</Text>
        {goals.map((goal)=>(
          <View key={goal} style={appStyles.goals}>
            <Text>{goal}</Text>
          </View>
        ))}
        
      </View>
    </View>
  );
}


