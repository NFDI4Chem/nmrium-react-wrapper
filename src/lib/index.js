import React from 'react';
import NMRium from 'nmrium';
import { FormControl, Select, MenuItem, InputLabel, OutlinedInput } from '@material-ui/core';
import { addJcampFromURL, addJcamp, toJSON } from 'nmrium/lib/data/SpectraManager';

export default class NMRDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spectraData: {}
    };
  }

  componentDidMount() {
    // this.loadJcamp();
    this.loadJcampURL();
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
    if (jcamp) {
      const spectra = [];
      addJcamp(spectra, jcamp, {})
      const spectraData = {spectra: spectra}
      this.setState({spectraData: spectraData})
    }
  }

  loadLocalJcampFile() {
    const { jcampFile } = this.props;
    if (jcampFile) {
      console.log('jcamp file')
      const spectra = [];
      // console.log(jcampFile)
      // this.fetchLocal('file:///home/eln/Documents/Working/chemotion_ELN/tmp/tmp_jcamp20210628-1776366-ifta9e')
      // .then((response) => {
      //   console.log(response)
      // })
      // .catch((err) => {
      //   console.error(err);
      // })
      
      // const ids = [parseInt(jcampFile)]
      // console.log(ids)
      // fetch('http://172.21.39.135:3000/api/v1/attachments/files/', {
      //   method: 'POST',
      //   mode: 'no-cors',
      //   credentials: 'same-origin',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ ids }),
      // }).then((response) => {
      //   return response.json();
      // }).then((json) => {
      //   console.log(json)
      //   return json;
      // }).catch((error) => {
      //   console.log("error")
      //   console.log(error)
      // })
    }
  }

  handleDataChange(data) {
    if (data && data.data) {
      const exportedData = toJSON(data)
      // console.log(exportedData)
      const spectra = exportedData.spectra
      if (spectra && spectra.length > 0) {
        const firstSpc = spectra[0]
        const spcPeaks = firstSpc.peaks.values
        const peaks = spcPeaks.map((pVal) => {
          return pVal.delta
        })
        console.log(peaks)
      }
    }
    
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
            <MenuItem value="write_mutiplicity">
              <span>Write multiplicity</span>
            </MenuItem>
            <MenuItem value="save">
              <span>Save</span>
            </MenuItem>
          </Select>
        </FormControl>
        <NMRium 
          data={spectraData}
          onDataChange={this.handleDataChange}
          preferences={preferences}/>
      </div>
      
    );
  }
};