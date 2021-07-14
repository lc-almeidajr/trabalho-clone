import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



//imagem da home
const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
    <Image  source={require('./imagemapp.png')} 
    style={{width:"70%" , height:"70%" , alignSelf: 'center'}}/>
    <Button title= "Entrar" color="#EE6C4D"></Button>
    
    <Button title = "Preciso de Ajuda"
    style
     onPress={()=>{
      navigation.navigate("Ajuda")}}>
    </Button>
    </View>
  )
}

const Ajuda = ({navigation}) => {
  return(
    <View style={styles.container}>
    <Button title = "Voltar"
     style
     onPress={()=>{
      navigation.navigate("Home")}}>
    </Button>
    </View>
  )
}

/*const Login = ({navigation}) => {
  return(
    <View style={styles.container}>
    <Button title = "Voltar"
    //style
     onPress={()=>{
      navigation.navigate("Home")}}>
    </Button>
    </View>
  )
}*/
//Estilo das páginas
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:'#235789',
    }
});
//Onde será renderizado
export default function AppNovinho(){
 return(
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ajuda" component={Ajuda}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}