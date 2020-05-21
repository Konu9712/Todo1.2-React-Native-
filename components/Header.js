import React from 'react';
import { View,Text,StyleSheet } from "react-native";



const Header = props =>{
    return(
        <View style={styles.header}> 
        <Text style={styles.headertitle}> {props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
        header:{
            width:'100%',
            fontWeight:'bold',
            height:90,
            paddingTop:36,
            borderBottomRightRadius:25,
            borderBottomLeftRadius:25,
            backgroundColor:'#e6ee9c',
            alignItems:'center',
            justifyContent:'center',
        },
        headertitle:{
            color:'white',
            fontSize:30,
        },

});

export default Header;