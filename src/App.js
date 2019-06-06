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
            <div style={{transform:"scale(0.6)", margin:"-70px", borderRadius:"20px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                frameBorder="0"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:2.5})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 2.5) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              WHAT YOU HEARD:
            </h1>
            <p><i>The string vibrates 330 times per second when plucked.</i></p>
            <p><b>This frequency relates to the musical note E!</b></p>
            <img src='/330.png' style={{width:'550px', margin: '20px', borderRadius:"20px"}} />
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
            <p><b>Place your finger on the fret with the rainbow tape and try again!</b></p>
            <div style={{transform:"scale(0.6)", margin:"-70px", borderRadius:"20px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                frameBorder="0"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:3.5})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 3.5) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              WHAT YOU HEARD:
            </h1>
            <p><i>Now, the string vibrates 660 times per second when the length is halved.</i></p>
            <p><b>This frequency ALSO relates to the musical note E!</b></p>
            <p><b>Musical notes are SEQUENCES of frequencies that are all proportional to change in string length.</b></p>
            <img src='/660.png' style={{width:'550px', margin: '20px', borderRadius:"20px"}} />
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
              STEP 3
            </h1>
            <p><i>Very cool! When the string length was havled, the frequency doubled, but the note stayed the same!</i></p>
            <p><b>Try the fret with the cupcake tape to see what note results from 2/3 of the string!</b></p>
            <div style={{transform:"scale(0.6)", margin:"-70px", borderRadius:"20px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                frameBorder="0"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:4.5})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 4.5) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              WHAT YOU HEARD:
            </h1>
            <p><i>This time, the frequency is 495Hz when 2/3 of the string vibrates.</i></p>
            <p><b>This frequency relates to the musical note B, which is the interval of a 5th from our original note.</b></p>
            <p><b>Musical intervals are ALSO proportional to changes in string length.</b></p>
            <img src='/ratios.png' style={{width:'550px', margin: '20px', borderRadius:"20px"}} />
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
              STEP 4
            </h1>
            <p><i>Excellent! now let's try a challenge to find another musical interval - the Major 3rd!</i></p>
            <p><b>Try the sunglasses fret and use the frequency along with the clue on the legend to guess the proportional string length!</b></p>
            <div style={{transform:"scale(0.6)", margin:"-70px", borderRadius:"20px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                frameBorder="0"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:5.5})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 5.5) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              YOU DID IT!
            </h1>
            <p><i>The Major 3rd is proportional to 3/4 of the string length.</i></p>
            <p><b>Now try and explore some other frets of the guitar and see what frequencies you can create!</b></p>
            <div style={{transform:"scale(0.6)", margin:"-70px", borderRadius:"20px"}}>
              <Iframe url="https://www.alexdemartos.es/wtuner/"
                width="550px"
                height="450px"
                id="myId"
                frameBorder="0"
                className="myClassname"
                allow="microphone"
                display="initial"
                position="relative"/>
              </div>
            <button onClick={()=>this.setState({step:6})}>next</button>
          </header>
        </div>
      );
    }

    if (this.state.step === 6) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>
            WHAT WE LEARNED
            </h1>
            <p><i>- When strings vibrate, they create sounds at specific frequencies (Hz).</i></p>
            <p><i>- Each note in the musical scale relates to a sequence of frequencies.</i></p>
            <p><i>- String length is proportional to musical notes and intervals.</i></p>
            <p><i>- We can create musical scales by controlling the length of a string</i></p>
            <button onClick={()=>this.setState({step:0})}>start over</button>
          </header>
        </div>
      );
    }
    
  }
}

export default App;
