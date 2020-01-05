import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Table, Glyphicon } from 'react-bootstrap';
import './Jadwal.css';
import ListVerifikasi from './ListVerifikasi';

class Jadwal extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pasien: [],
      tanggal: '',
      tampil: false
    }
    this.setuju = this.setuju.bind(this);
  }


  componentDidMount() {
          
      if(!localStorage.usertoken) {
          alert('kamu harus login dulu')
          this.props.history.push('/login')
      } else {
        this.getPasien()
        this.interval = setInterval(() => this.getPasien(), 20000);
      }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getPasien = _ => {
    axios.get('http://localhost:4000/api/pasien')
      .then(result => this.setState({ pasien : result.data }))
      .catch(err => console.log(err))
  }

  tanggal = event => {
    this.setState({
      tanggal : event.target.value
    })
  }

  setuju = event => {
    event.preventDefault();
    axios.put(`http://localhost:4000/api/pasien/${event.target.id}`, {tanggal : this.state.tanggal, status: 'S'})
     .then(res => {
         console.log('data diverifikasi');
    })
    .then(regetpasien => {
      let getpasien = this.getPasien();
      return getpasien;
    })
    .catch(err => console.log(err))
  };

  tolak = event => {
    event.preventDefault();
    axios.delete(`http://localhost:4000/api/pasien/${event.target.id}`)
    .then(res => {
         console.log('data ditolak');
    })
    .then(regetpasien => {
      let getpasien = this.getPasien();
      return getpasien;
    })
    .catch(err => console.log(err))

  };

  tampil = i => {
    this.setState({
       tampil : !this.state.tampil
    })
  }

  tabel = e => {
    let hasil = this.state.pasien.filter(patient => patient.status === "S")
    function no() {
      if (e === 0) { 
        return <th>No</th> 
      }
    }
    return (
      <div>         
        <Table responsive xs={12} md={12} >
            <thead>
                <tr>
                    {no()}
                    <th>Data Pasien</th>
                </tr>
            </thead>
          
            { hasil.map((pasen, i) => {
              i= i+1
              let num = i++
              function nomor() {
                if (e === 0) { 
                return <td><h3>{num}</h3></td> 
                }else {
                  return false
                }
              }
              return (
                <tbody key={pasen._id}>
                
                    <tr className="listnama">
                        {nomor()}
                        <td>
                          <h3>{pasen.nama}</h3>
                          <div className="jadwal-desk">
                            <p>
                              <span>{pasen.diagnosa}</span>
                              <span>{pasen.pasiendari}</span>
                            </p>
                            <p>
                              <span>{pasen.usia + ' tahun'}</span>
                              <span>{pasen.rm}</span>
                            </p>
                          </div>
                        </td>
                    </tr>                           
                </tbody>
                )
            })}
          </Table>
        </div>
      )
    }
 

  render() {
    let hari = ["Senin","Selasa","Rabu","Kamis","Jum'at"];
    return (
      <Grid className='jadwal-body' fluid>
        <Row>
          <Glyphicon onClick={this.tampil} className='tombol' glyph="glyphicon glyphicon-th-list" /> 
          {
            hari.map ( (harii, i) => {
              function tgl(e) {
                var tempDate = new Date();
                var date = (tempDate.getDate()+e) + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear();
                return (
                  <p>{date}</p>
                );
              }
              // function ofset(k) {
              //   if(k === 0) {
              //     return 
              // return <Col xs={12} md={2} key={i} >
              
              
             
          
            return(
              <Col xs={12} md={2} key={i} xsOffset={1}>
                <div>
                  <h2>{harii}</h2>
                  {tgl(i)}
                </div>
                {this.tabel(i)}
              </Col>
            )
            }
          )}  
          <Col xs={12} md={5}>
            <ListVerifikasi 
              list={this.state.pasien}
              toggle={this.state.tampil} 
              tanggal={this.tanggal}
              setuju={this.setuju}
              tolak={this.tolak}
              tampil={this.tampil} 
            />
          </Col>
        </Row>
      </Grid>
        
    );
  }  
}

export default Jadwal;