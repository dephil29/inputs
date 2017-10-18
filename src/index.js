import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ControlledInput extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    console.log(event.target);
    this.setState({
      text: event.target.value
    });
  }

  render(){
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}


//this one makes it where you can't actually type into the input
class TrickInput extends Component {
  state = {
    text: "try typing something"
  };

  handleChange = event => {
    this.setState({
      text: "haha nope"
    });
  };

  render(){
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}


//this one makes it to where you can't type in numbers
class NoNumbersInput extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    let text = event.target.value;
    text = text.replace(/[0-9]/g, "");

    this.setState({
      text
    });
  };
  render(){
  return <input type="text" value={this.state.text} onChange={this.handleChange} />;
  }
}


//DON'T USE THIS. IT IS UNCONTROLLED AND CAN'T
const EasyInput = () => <input type="text" />

ReactDOM.render(<EasyInput />, document.getElementById('root'));
