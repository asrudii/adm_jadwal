import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button, Grid, Row, Col } from 'react-bootstrap';

class Ajukan extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Form>
                        <Col sm={6} md={3}>                        
                            <FormGroup controlId="formBasicText" >
                                <ControlLabel> No RM</ControlLabel>
                                <FormControl type="Number" placeholder="Masukkan RM" name="rm"/>
                            </FormGroup>
                            <FormGroup controlId="formBasicText" >
                                <ControlLabel> Nama Pasien </ControlLabel>
                                <FormControl type="text" placeholder="Masukkan Nama" name="nama"/>
                            </FormGroup>
                            <FormGroup controlId="formBasicNumber" >
                                <ControlLabel> Usia (opsional) </ControlLabel>
                                <FormControl type="number" placeholder="Masukkan Usia" name="usia"/>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Pilih Diagnosa</ControlLabel>
                                <FormControl componentClass="select" placeholder="Pilih" name="dx">
                                    <option value="select">Pilih</option>
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
                            </FormGroup>
                            <FormGroup controlId="formBasicText" >
                                <ControlLabel> Penunjang (opsional) </ControlLabel>
                                <FormControl type="text" placeholder="Trop I, CKMB, ..." name="pj"/>
                            </FormGroup>
                        </Col>
                        <Col sm={2} md={1}></Col>
                        <Col sm={6} md={3}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Pasien Dari</ControlLabel>
                                <FormControl componentClass="select" placeholder="Pilih" name="dari">
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
                                <FormControl type="text" placeholder="Masukkan Telp" name="telp" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Keterangan tambahan (opsional)</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Masukkan keterangan " />
                            </FormGroup>
                            <Button bsStyle="primary" type="submit">Submit</Button>
                        </Col>
                    </Form>
                </Row>
            </Grid>
        );
    }
}

export default Ajukan;



  
 
  