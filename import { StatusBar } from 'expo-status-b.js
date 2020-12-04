import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,  Alert } from 'react-native';


//Class base Component
class App extends React.Component {
  state= {
    text:"loading"
  }
  render() {
      return (
      <View style={styles.container}>
        <Text style={{fontsize:50}}>{this.state.text}</Text>
        <TextInput 
        style={{fontSize:30,height:40,textAlign:"center"}}
        placeholder= "type here"
        onChangeText={(text)=> this.setState({text:text})}
        />
        <Button title ="Click me !!!"
        onPress={()=> Alert.alert("Are shi m click krdiya")}/>
        <Text style={{fontSize:30}}>YES !!</Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    justifyContent : "center",
    alignItems: "center",
    backgroundColor:"orange"
  },
  
  
});
