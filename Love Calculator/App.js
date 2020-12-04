//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput, Appbar, Button,icon } from 'react-native-paper';
import Displaylove from './components/Displaylove'
//Class base Component
class App extends React.Component {
  state = {
    fname: '',
    sname: '',
    result: 'loading'
  }
  sumitit() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
   {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "ab6b7b9af5msh13d06f4d1a6f217p12b0e4jsn3474fb247314",
        }
      })
      .then(data => data.json())
      .then(data2 => {
        console.log(data2);
        this.setState({
          result:data2
        })
      })
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % calculator"
            style={{ alignItems: "center" }}
          />

        </Appbar.Header>

        <TextInput
          label="Person1(male)"
          value={this.state.fname}
          onChangeText={text => this.setState({ fname:text })}
        />

        <TextInput
          label="Person2(female)"
          value={this.state.sname}
          onChangeText={text => this.setState({ sname : text })}
        />
        <Button
          mode="contained"
          style={{ margin: 10 }}
          onPress={() => this.sumitit()}>
          Calculate
  </Button>
  <Displaylove data={this.state.result} />
      </View >
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
});
