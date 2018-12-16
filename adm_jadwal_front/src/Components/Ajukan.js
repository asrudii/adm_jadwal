import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

class Ajukan extends Component {
    constructor() {
        super();
        
        this.state = {
            rm : '',
            nama : '',
            usia : '',
            diagnosa : '',   
            penunjang : '',  
            pasiendari : '',
            telp : '',
            ket : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    handleSubmit = event => {
        alert('data berhasil ditambahkan');
        event.preventDefault();     
        
         axios.post('http://localhost:4000/api/pasien', {
             rm: this.state.rm, 
             nama: this.state.nama,
             usia: this.state.usia,
             diagnosa: this.state.diagnosa,
             penunjang: this.state.penunjang,
             pasiendari: this.state.pasiendari,
             telp: this.state.telp,
             ket: this.state.ket,
        })
         .then(res => {
             console.log(res);
             console.log(res.data);
          })
          .catch(err => console.log(err))

        this.setState({
            rm : '',
            nama : '',
            usia : '',
            diagnosa : '',   
            penunjang : '',  
            pasiendari : '',
            telp : '',
            ket : '',
        });

    }

    validasinama() {
        const lengthnama = this.state.nama.length;
        if (lengthnama > 1) return 'success';
        else if (lengthnama > 0) return 'error';
        return null;
    }

    validasidx() {
        const lengthdx = this.state.diagnosa.length;        
        if (lengthdx > 1) return 'success';
        else if (lengthdx > 0) return 'error';
        return null;
    }

    disabelsubmit() {
        const nama = this.state.nama.length;
        const dx = this.state.diagnosa;

        if ( nama <1 ) {
            return true
        }else if(dx === ''){
            return true
        }
         else {
            return false
        }
    }

    componentDidMount () {
        
        if(!localStorage.usertoken) {
            alert('kamu harus login dulu')
            this.props.history.push('/login')
        } else {
            const token = localStorage.usertoken
            const decode = jwt_decode(token)
            // const updatedata = Object.assign({}, this.state);
            this.setState({
                username: decode.username,
                email: decode.email
            })
        }
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Form onSubmit={this.handleSubmit}>
                        <Col sm={6} md={3}>                        
                            <FormGroup controlId="formBasicText" >
                                <ControlLabel> No RM</ControlLabel>
                                <FormControl type="Number" placeholder="Masukkan RM" value={this.state.rm} name="rm"  onChange={this.handleChange}/>
                                <HelpBlock>opsional untuk membantu melacak pasien</HelpBlock>
                            </FormGroup>
                            <FormGroup controlId="formBasicText" validationState={this.validasinama()} >
                                <ControlLabel> Nama Pasien </ControlLabel>
                                <FormControl type="text" placeholder="Masukkan Nama" value={this.state.nama} name="nama"  onChange={this.handleChange}/>
                                <FormControl.Feedback />
                                <HelpBlock>Harus diisi dan tidak boleh kosong</HelpBlock>
                            </FormGroup>
                            <FormGroup controlId="formBasicNumber" >
                                <ControlLabel> Usia (opsional) </ControlLabel>
                                <FormControl type="number" placeholder="Masukkan Usia" value={this.state.usia} name="usia"  onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect" validationState={this.validasidx()}>
                                <ControlLabel>Pilih Diagnosa</ControlLabel>
                                <FormControl componentClass="select" placeholder="Pilih" value={this.state.diagnosa} name="diagnosa"  onChange={this.handleChange}>
                                    <option value="Pilih">Pilih</option>
                                    <option value="TMT">CAD SAP CCS II, TMT (+)</option>
                                    <option value="StemiA">STEMI Anterior</option>
                                    <option value="StemiI">STEMI Inferior</option>
                                    <option value="StemiAs">STEMI Anteroseptal</option>
                                    <option value="StemiAl">STEMI Anterolateral</option>
                                    <option value="OMI">OMI</option>
                                    <option value="NSTEMI">NSTEMI</option>
                                    <option value="DSE">CAD SAP CCS III, DSE (+)</option>
                                    <option value="Staging">Staging, Recurrent Chest Pain</option>                                    
                                </FormControl>
                                <HelpBlock>Harus diisi dan tidak boleh kosong</HelpBlock>
                            </FormGroup>
                            <FormGroup controlId="formBasicText" >
                                <ControlLabel> Penunjang (opsional) </ControlLabel>
                                <FormControl type="text" placeholder="Trop I, CKMB, ..." value={this.state.penunjang} name="penunjang"  onChange={this.handleChange}/>
                            </FormGroup>
                        </Col>
                        <Col sm={2} md={1}></Col>
                        <Col sm={6} md={3}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Pasien Dari</ControlLabel>
                                <FormControl componentClass="select" placeholder="Pilih" value={this.state.pasiendari} name="pasiendari"  onChange={this.handleChange}>
                                    <option value="select">Pilih</option>
                                    <option value="Poli">Poli Jantung</option>
                                    <option value="Cibabat">Cibabat</option>
                                    <option value="Siloam">Siloam</option>
                                    <option value="Mitrakasih">Mitrakasih</option>
                                    <option value="Avisena">Avisena</option>
                                    <option value="RuangCeremai">Ruang Ceremai</option>
                                    <option value="RuangICCU/ICU">Ruang ICCU/ICU</option>
                                    <option value="RuangHCU">Ruang HCU</option>
                                    <option value="RuangCikurai">Ruang Cikurai</option>
                                    <option value="RuangPelangi">Ruang Pelangi</option>
                                    <option value="RuangSiliwangi">Ruang Siliwangi</option>
                                    <option value="RuangPangrango">Ruang Pangrango</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formBasicText" >
                                <ControlLabel> Telp </ControlLabel>
                                <FormControl type="text" placeholder="Masukkan Telp" value={this.state.telp} name="telp"  onChange={this.handleChange}/>
                                <HelpBlock>Disarankan diisi</HelpBlock>
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Keterangan tambahan (opsional)</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Masukkan keterangan " value={this.state.ket} name="ket"  onChange={this.handleChange}/>
                            </FormGroup>
                            <Button disabled={this.disabelsubmit()} bsStyle="primary" type="submit">Submit</Button>
                        </Col>
                    </Form>
                </Row>
            </Grid>
        );
    }
}

export default Ajukan;



  
 
  