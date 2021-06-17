import React from 'react';
import NMRium from 'nmrium';
import { addJcampFromURL } from 'nmrium/lib/data/SpectraManager';

export default class NMRDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spectraData: {}
    };
  }

  componentDidMount() {
    this.loadJcamp();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.jcampURL !== this.props.jcampURL) {
      this.loadJcamp();
    }
  }

  loadJcamp() {
    const { jcampURL } = this.props;

    const spectra = []
    
    addJcampFromURL(spectra, jcampURL, {}).then(() => {
      const spectraData = {spectra: spectra}
      this.setState({spectraData: spectraData})
    });
  }

  render() {
    const { spectraData } = this.state;
    return (
      <NMRium 
        data={spectraData}/>
    );
  }
};