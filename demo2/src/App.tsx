import React from 'react';
import './App.css';

type AppProps = {
  message?: string;
};
type AppState = {
  counter: number;
};
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    counter: 0,
  };
  
  incCounter = () => {
      this.setState({counter: this.state.counter+1});
  }

  render() {
    return (
      <div>
        {this.props.message ? this.props.message : "Nothing Here"}
        <br />
        Counter = {this.state.counter}
        <br />
        <button onClick={this.incCounter}>Increment</button>
      </div>
    );
  }
}

export default App;
