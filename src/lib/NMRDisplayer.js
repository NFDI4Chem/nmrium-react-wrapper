import React from 'react';
import NMRium from 'nmrium';
import { FormControl, Select, MenuItem, InputLabel, OutlinedInput, Button } from '@material-ui/core';
import { addJcampFromURL, addJcamp, toJSON } from 'nmrium/lib/data/SpectraManager';

export default class NMRDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spectraData: {},
      operationSelected: '',
      workingData: null
    };

    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectChanged = this.handleSelectChanged.bind(this)
    this.savePeaks = this.savePeaks.bind(this)
    this.saveIntegrals = this.saveIntegrals.bind(this)
  }

  componentDidMount() {
    this.loadJcamp();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.jcampURL !== this.props.jcampURL) {
      this.loadJcampURL();
    }
    if (prevProps.jcamp !== this.props.jcamp) {
      this.loadJcamp();
    }
    if (prevProps.jcampFile !== this.props.jcampFile) {
      this.loadLocalJcampFile();
    }
  }

  loadJcampURL() {
    const { jcampURL } = this.props;

    const spectra = [];

    fetch('/api/v1/chemspectra/nmr_displayer/'+jcampURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json.jcamp)
      addJcamp(spectra, json.jcamp, {})
      const spectraData = {spectra: spectra}
      this.setState({spectraData: spectraData})
    })
    .catch((err) => {
      console.error(err);
    })
  }

  loadJcamp() {
    const { jcamp } = this.props;
    if (typeof jcamp === 'string') {
      const spectra = [];
      addJcamp(spectra, jcamp, {})
      const spectraData = {spectra: spectra}
      this.setState({spectraData: spectraData})
    }
  }

  loadLocalJcampFile() {
    const { jcampFile } = this.props;
    if (jcampFile) {
      const spectra = [];
    }
  }

  savePeaks() {
    const {workingData} = this.state;
    if (workingData) {
      const exportedData = toJSON(workingData)
      // console.log(exportedData)
      const spectra = exportedData.spectra;
      if (spectra && spectra.length > 0) {
        const firstSpc = spectra[0];
        const spcPeaks = firstSpc.peaks.values;
        const peaks = spcPeaks.map((pVal) => {
          return pVal.delta.toFixed(2);
        })
        const info = firstSpc.info;
        if (window.parent) {
          window.parent.postMessage({type: 'peaks', data: peaks, layout: info.nucleus}, "*");
        }
        
      }
    }
  }

  saveIntegrals() {
    const {workingData} = this.state;
    if (workingData) {
      const exportedData = toJSON(workingData)
      // console.log(exportedData)
      const spectra = exportedData.spectra
      if (spectra && spectra.length > 0) {
        const firstSpc = spectra[0]
        const spcIntegral = firstSpc.integrals.values
        const integrals = spcIntegral.map((pVal) => {
          return pVal.integral
        })
        // console.log(integrals)
        
      }
    }
  }

  saveRanges() {
    const {workingData} = this.state;
    if (workingData) {
      const exportedData = toJSON(workingData)
      // console.log(exportedData)
      const spectra = exportedData.spectra
      if (spectra && spectra.length > 0) {
        const firstSpc = spectra[0]
        const ranges = firstSpc.ranges
        const spcPeaks = firstSpc.peaks.values;
        const peaks = spcPeaks.map((pVal) => {
          return pVal.delta.toFixed(2);
        })
        const info = firstSpc.info;
        if (window.parent) {
          window.parent.postMessage({type: 'ranges', data: {peaks: peaks, ranges: ranges}, layout: info.nucleus}, "*");
        }
      }
    }
  }

  handleSubmit(event) {
    const {operationSelected} = this.state;
    if (operationSelected === 'write_peaks') {
      this.savePeaks()
    }
    else if (operationSelected === 'write_integrals') {
      this.saveIntegrals()
    }
    else if (operationSelected === 'save_ranges') {
      this.saveRanges()
    }
  }

  handleDataChange(data) {
    if (data && data.data) {
      this.setState({workingData: data})
      // const exportedData = toJSON(data)
      // // console.log(exportedData)
      // const spectra = exportedData.spectra
      // if (spectra && spectra.length > 0) {
      //   const firstSpc = spectra[0]
      //   const spcPeaks = firstSpc.peaks.values
      //   const peaks = spcPeaks.map((pVal) => {
      //     return pVal.delta
      //   })
      //   console.log(peaks)
      // }
    }
    
  }

  handleSelectChanged(event) {
    // console.log(event.target.value)
    this.setState({ operationSelected: event.target.value })
  }

  render() {
    const { spectraData } = this.state;
    const preferences = {
      toolBarButtons: {
        hideImport: true,
        hideExportAs: true
      },
      panels: {
        hideMultipleSpectraAnalysisPanel: true
      }
    }
    return (
      <div className="nmrium_container">
        <FormControl>
          <InputLabel className='select-sv-bar-label'>
            Submit
          </InputLabel>
          <Select
            variant="outlined"
            onChange={this.handleSelectChanged}
            input={
              (
                <OutlinedInput
                  className='input-sv-bar-operation'
                  labelWidth={50}
                />
              )
            }
          >
            <MenuItem value="write_peaks">
              <span>Write peaks</span>
            </MenuItem>
            {/* <MenuItem value="write_integrals">
              <span>Write integrals</span>
            </MenuItem> */}
            <MenuItem value="save_ranges">
              <span>Write ranges</span>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </FormControl>
        <NMRium 
          data={spectraData}
          onDataChange={this.handleDataChange}
          preferences={preferences}/>
      </div>
      
    );
  }
};