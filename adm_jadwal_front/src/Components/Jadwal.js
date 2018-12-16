import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import './Jadwal.css';
import jwt_decode from 'jwt-decode';

class Jadwal extends Component {
  constructor() {
    super();
  
    this.state = {
      pasien: []      
    }
    this.setuju = this.setuju.bind(this);
  }


  componentDidMount() {
          
      if(!localStorage.usertoken) {
          alert('kamu harus login dulu')
          this.props.history.push('/login')
      } else {
          const token = localStorage.usertoken
          const decode = jwt_decode(token)
          // const updatedata = Object.assign({}, this.state);
          this.setState({
              username: decode.username,
              nama: decode.nama,
              email: decode.email
          })
      }
      this.getPasien()
      this.interval = setInterval(() => this.getPasien(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getPasien = _ => {
    axios.get('http://localhost:4000/api/pasien')
      .then(result => this.setState({ pasien : result.data }))
      .catch(err => console.log(err))
  }

  setuju = event => {   
    // this.setState ({
    //     rm : event.target.id
    // })
    // this.forceUpdate();
    axios.put(`http://localhost:4000/api/pasien/${event.target.id}`, {status: 'S'})
     .then(res => {
         console.log('data diverifikasi');
    })
    .then(regetpasien => {
      let getpasien = this.getPasien();
      return getpasien;
    })
    .catch(err => console.log(err))

  };

 
 
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          {this.state.pasien.map((p) => {
            if(p.status === 'B') {
             return (
              <div>
                <h1>{p.nama}</h1>
                <p>{p.rm}</p>
                <input type='submit' id={p.rm} value='verifikasi' onClick={this.setuju} />
              </div>
            )
            }else {
              console.log(p.nama);
            }
          })}
          
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
                if(patient.status === 'S'){
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
                )}})}
            </Table>
          </Col>
        </Row>
      </Grid>
        
    );
  }  
}

export default Jadwal;