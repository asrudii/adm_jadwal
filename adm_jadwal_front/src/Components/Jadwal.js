import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import './Jadwal.css';

class Jadwal extends Component {
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
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Table responsive xs={6} md={4} >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Data Pasien</th>
                    </tr>
                </thead>
                {this.state.pasien.map((patient, i) => {
                let num = i+1;
                let nomor = num++;
                return (
                <tbody key={patient._id}>
                    <tr className="listnama">
                        <td><h3>{nomor}</h3></td>
                        <td >
                          <tr>
                            <td>
                              <h3>{patient.nama}</h3>
                            </td>
                            <td className="jadwal-desk">
                              <p>
                                <span>STEMI Anterior</span>
                                <span>Cibabat</span>
                              </p>
                              <p>
                                <span>Mayor</span>
                                <span>Cikurai</span>
                              </p>
                            </td>
                          </tr>
                        </td>
                    </tr>
                </tbody>
                )})}
            </Table>
          </Col>
        </Row>
      </Grid>
        
    );
  }  
}

export default Jadwal;