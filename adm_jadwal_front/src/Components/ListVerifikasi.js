import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button, Glyphicon } from 'react-bootstrap';
import './ListVerifikasi.css';

class ListVerifikasi extends Component {
    constructor(props) {
      super(props);
    }
  
      render() {
        let hasil2 = this.props.list.filter(patient => patient.status === "B")
        return (
        <Grid className={this.props.toggle === false ? 'list-componen' : 'list-componen active'}>
            <Row>
              <Col xs={12} md={6}>
                <Table responsive xs={12} md={6} >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Data Pasien</th>
                            <th>Keterangan</th>
                            <th>Aksi</th>
                            <th><Glyphicon onClick={this.props.tampil} className='tombol' glyph="glyphicon glyphicon-remove" /></th>
                        </tr>
                    </thead>
                  
                    <tbody>
                            {hasil2.map((pasieen, i) => {
                                i= i+1
                                let num = i++
                                return (
                                    <tr key={pasieen._id}>
                                        <td>
                                            <p>{num}</p>
                                        </td>
                                        
                                        <td ><h3>{pasieen.nama}</h3></td>
                                        
                                        <td className="jadwal-desk">
                                        <p>
                                            <span>{pasieen.diagnosa}</span>
                                            <span>{pasieen.pasiendari}</span>
                                        </p>
                                        <p>
                                            <span>{pasieen.usia + ' tahun'}</span>
                                            <span>{pasieen.rm}</span>
                                        </p>
                                        </td>
                                        <td>
                                            <input type='date' onChange={this.props.tanggal} /> 
                                        </td>
                                        <td>
                                            <Button id={pasieen.rm} onClick={this.props.setuju} bsStyle='success' bsSize='xsmall' block>Setuju</Button>
                                            <Button id={pasieen.rm} onClick={this.props.tolak} bsStyle='danger' bsSize='xsmall' block>tolak</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                                                    
                    </tbody>
    
                </Table>
              </Col>
            </Row>
          </Grid>
        )
      }
  }

  export default ListVerifikasi;