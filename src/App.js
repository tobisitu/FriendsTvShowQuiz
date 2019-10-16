import React, {Component} from 'react';
import friends from './friends.png';
import './App.css';
import QuestionLayout from './QuestionLayout';
import Intro from './Intro';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      BeginIsClicked: false,
      EndIsClicked:false,
      NextIsClicked:false,
      Question: 0
    };

    this.handleBegin = this.handleBegin.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleBegin(event){
    event.preventDefault(); 
    // console.log(this.state.BeginIsClicked);
    this.setState({BeginIsClicked:true},
      () => {
        console.log(this.state.BeginIsClicked);
        console.log("Ready to Begin!");
        // increment question number
        //endIsClicked = false
      
      }
    ); 
  }

  handleEnd(event){
    event.preventDefault(); 
    // console.log(this.state.EndIsClicked);
    this.setState({EndIsClicked:true},
      () => {
        console.log(this.state.EndIsClicked);
        console.log("End Quiz!");
        this.setState({BeginIsClicked:false})
        // question number = 0
        // nextIsClicked = false
      }
    ); 
  }

  handleNext(event){
    event.preventDefault(); 
    // console.log(this.state.EndIsClicked);
    this.setState({NextIsClicked:true},
      () => {
        console.log(this.state.NextIsClicked);
        console.log("Next Question!");
        // question number 
        // nextIsClicked = false
      }
    ); 
  }


  render(){
    return(
      <div className="App ">
        <div>
          <header className="App-header pt-5  ">
            <img src={friends} className="App-logo" alt="logo" />
          </header>
          <div className="container">
            {this.state.BeginIsClicked ? 
              <QuestionLayout EndIsClicked ={this.handleEnd}/> : <Intro BeginIsClicked ={this.handleBegin} />}
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;