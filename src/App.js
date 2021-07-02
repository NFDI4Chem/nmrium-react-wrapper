import React from 'react';
import './App.css';
import NMRDisplayer from './lib/NMRDisplayer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jcampURL: ''
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      const { jcamp } = match.params
      this.setState({jcampURL: decodeURIComponent(jcamp)})
    }
  }

  render() {
    let { jcampURL } = this.state;
    return (
      <div className="App">
        <NMRDisplayer
          jcampURL={jcampURL}/>
      </div>
    );
  }
};
