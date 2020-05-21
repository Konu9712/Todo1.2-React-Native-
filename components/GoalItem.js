import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

import Card from './Card';

const GoalItem = props =>{
    return( 
<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.goallist}>
        <Card style={styles.card}>
          <Text style={styles.list}>{props.title}</Text>
        </Card>
    </View>
</TouchableOpacity>   
    );
};
 const styles = StyleSheet.create({
    card:{
        margin:7,
       
        backgroundColor:'lightblue',
        //fontWeight:'bold',
        //fontSize:50,
      },
      goallist:{
        paddingHorizontal:40,
      },
      list:{
        fontWeight:'bold',
        fontSize:19,
        
      },
 });

 export default GoalItem;