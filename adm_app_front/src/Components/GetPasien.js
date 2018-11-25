import React, { Component } from 'react';
import axios from 'axios';

class GetPasien extends Component {
  constructor() {
    super();
  
    this.state = {
      pasien: []
    };
  }
  componentDidMount() {
    this.getPasien();
  }

  getPasien = _ => {
    axios.get('http://localhost:4000/api/pasien')
      .then(result => this.setState({ pasien : result.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h2>data pasien</h2>
        <ul>
          {this.state.pasien.map(patient =>
            <li key={patient._id}>
              <p>{patient.rm}{' | '}{patient.nama}{' | '}</p>
            </li>
            )}
        </ul>
      </div>
    );
  }  
}

export default GetPasien;