import React from 'react';
import './App.css';
import NMRDisplayer from './lib/NMRDisplayer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jcampURL: ''
    };

    this.receivePostMessage = this.receivePostMessage.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      const { jcamp } = match.params
      this.setState({jcampURL: decodeURIComponent(jcamp)})
    }

    window.addEventListener("message", this.receivePostMessage)
  }

  receivePostMessage(event) {
    if (event.data) {
      this.setState({jcamp: event.data})
    }
  }

  render() {
    const { jcamp } = this.state;
    return (
      <div className="App">
        <NMRDisplayer
          jcamp={jcamp}/>
      </div>
    );
  }
};
