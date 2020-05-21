import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,FlatList } from 'react-native';

import Header from './components/Header';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
    const [courseGoals, setCourseGoal] = useState([]);

    const addGoalHandler = goalTitle =>{
      setCourseGoal(currentGoals => [...currentGoals,{id: Math.random().toString(), value: goalTitle}]);
    };

    const removeGoalHandler = goalId =>{
        setCourseGoal(currentGoals => {
          return currentGoals.filter((goal) => goal.id !== goalId);
        });

    }
  return (
    <View style={styles.screen}>
    
       <Header title="Add Your Time Table" style={styles.header}/>
      <GoalInput onAddGoal={addGoalHandler}/> 
      <FlatList 
            keyExtractor={(item,index) =>item.id }
            data={courseGoals}
            renderItem={itemData => 
            
            <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value}/>}
          />
       
    </View>
  )}

const styles = StyleSheet.create({
  screen:{
      flex:1,
      
       justifyContent:'center',
    //   alignItems:'center',
      
       backgroundColor:'#80deea',
  }
 
});
