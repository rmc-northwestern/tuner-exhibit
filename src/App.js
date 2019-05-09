import React, { Component } from 'react';
import './App.css';
import Iframe from 'react-iframe'


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      step: 0
    }
  }
  render(){
    if (this.state.step === 0) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              STRING FREQUENCY
            </h1>
            <button onClick={()=>this.setState({step:1})}>begin</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 1) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              INTRODUCTION
            </h1>
            <p><i>Let’s begin by figuring out what “<b>frequency</b>” means in music:</i></p>
            <p>Each <b>note</b> on the musical scale is produced when an object vibrates at a particular speed.</p>
            <p>Faster vibrations create high notes, and slower vibrations create low notes.</p>
            <button onClick={()=>this.setState({step:2})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 2) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              STEP 1
            </h1>
            <p><i>Next, let’s figure out what note our string makes all by itself.</i></p>
            <p><b>Pluck the string and see what the tuner reads!</b></p>
            <div style={{transform:"scale(0.6)", margin:"-70px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:3})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 3) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              STEP 2
            </h1>
            <p><i>Next, what happens if we only vibrate half of the string?</i></p>
            <p><b>Place the fret in the middle of the string and pluck again!</b></p>
            <div style={{transform:"scale(0.6)", margin:"-70px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:4})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 4) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              STEP 2
            </h1>
            <p><i>Very cool! When the length of the string was cut in half, the frequency doubled!</i></p>
            <p><b>See what other notes you can make using the fret!</b></p>
            <div style={{transform:"scale(0.6)", margin:"-70px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:5})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 5) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
            WHAT WE LEARNED
            </h1>
            <p><i>- When objects vibrate, they create sounds at specific frequencies</i></p>
            <p><i>- Each note in the musical scale relates to a specific frequency</i></p>
            <p><i>- Changing the size and shape of an object changes the frequncy at which it vibrates</i></p>
            <p><i>- We can create different musical notes by altering the length of a taut string</i></p>
            <button onClick={()=>this.setState({step:0})}>finish</button>
          </header>
        </div>
      );
    }
    
  }
}

export default App;
