import React from 'react';
import {View, StyleSheet, TextInput, Alert, CustomButtom} from 'react-native';


export default function Login(){

  return(
    <View
        style={styles.body}
    >
    <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        //onChangeText = {(value)} => setName(value) 
    />
    <CustomButton
        title = 'Entrar'
        color = '#EE6C4D'
        onPress={()=>{}} />
    </View>

  )
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:'#235789',
  },

  input:{
    width:300,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#ffffff',
    textAlign:'center',
    fontSize:20,
    marginTop: 130,
    marginBottom: 10,

  }


})