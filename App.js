/**
 * Sample React Native Cavy Unit Test
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */

import React, {Component} from 'react';
import {View,} from 'react-native';
import Space from './Space';
import { Button, TextInput, Searchbar, Checkbox, Badge } from 'react-native-paper';
import { hook } from 'cavy';

class App extends Component {

  state = {
    text: '',
    text2: '',
    firstQuery: '',
  }
  
  render() {

    // const generateTestHook = useCavy();
    const { generateTestHook } = this.props;
  
    return (

      <View style={{marginTop: 100, width: '90%', margin: 20, }}>

        <TextInput
          label='Email'
          value={this.state.text}
          onChangeText={(text) => this.setState({text: text})}
          ref={generateTestHook('App.email')}
        />

        <Space />

        <TextInput
          mode={'outlined'}
          label='Senha'
          value={this.state.text2}
          onChangeText={(text) => this.setState({text2: text})}          
          secureTextEntry={true}
          ref={generateTestHook('App.password')}
        />

        <Space />  

        <Searchbar
          placeholder="Search"
          onChangeText={(query) => { this.setState({firstQuery: query });}}
          value={this.state.firstQuery}
          ref={generateTestHook('App.search')}
        />
        
        <Space />

        <Button 
          icon="camera" 
          mode="contained" 
          onPress={() => alert('Teste de Clique')}
          ref={generateTestHook('App.button')}
        >
          Press me
        </Button>

      </View>
    )
  }
};

const TestableScene = hook(App);
export default TestableScene;
