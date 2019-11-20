import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
  state={
    userInput: '',
    length:''
  }


  textLengthHandler = (event) =>{
    this.setState({userInput: event.target.value, length: event.target.value.length})

    console.log("Entro aqui cuando cambio de valor?");
  }
  
  deleteBoxHandler = (index) =>{
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput:updatedText});
  }
  
  render() {
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <CharComponent clicked={()=> this.deleteBoxHandler(index)} character={ch} key={index}/>;
    });
    return (
      //Al ser un input lo que se le pasa por parametro es onChange
      <div className="App">
        <input type="text"  
        onChange={this.textLengthHandler} 
        value={this.state.userInput}/>
        <p>La palabra es {this.state.userInput} y el tamanyo de la frase es  : {this.state.length}</p>
        <ValidationComponent tamanyo={this.state.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
