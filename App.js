import React from 'react';
import { StyleSheet, View,  Text, TextInput, Button} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.titleHead}> React Native</Text>
        <View style = {styles.input}>
          <TextInput 
              placeholder="Enter your Name" 
              value={this.state.value} 
              onChange={this.handleChange} 
          />
          <Button title= "submit" onPress={this.handleSubmit}/>
        </View>  
         
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  titleHead: {
    fontSize: 30, 
    fontWeight: 'bold'
  },
  input: {
    flexDirection: 'column'
  }
});


