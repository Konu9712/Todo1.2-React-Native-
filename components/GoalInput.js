import React,{ useState } from 'react';
import { View,TextInput,StyleSheet,Button,TouchableOpacity,Modal } from 'react-native';
 
const GoalInput = props =>{

    const [entererdGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
    };
    
    return (


    <View style={styles.inputContainer}>
          <TextInput placeholder='Course Goal' style={styles.input}
              onChangeText={goalInputHandler}/>
      <View style={styles.button}><Button style={styles.button} title='ADD' onPress={props.onAddGoal.bind(this, entererdGoal)}/></View>
    </View> 

     );
 };


 const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        paddingHorizontal:40,
        paddingTop:20,
       justifyContent:'center',
        alignItems:'center',
      },
      input:{
        
        justifyContent:'center',  
        maxWidth:'73%',
       // borderColor:'black',
       // borderWidth:1,
       opacity:0.60,
        borderRadius:10,
        marginRight:15,
        padding:10, 
       // fontWeight:'bold',
        fontSize:20,
        backgroundColor:'white',
      },
      button:{
          width:'20%'
      },
 });

  export default GoalInput;