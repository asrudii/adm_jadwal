import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Jumbotron, Row, Col, Glyphicon, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron className="Jumboo">
                    <Row>
                        <Col xs={12} md={9}>
                            <h2>Jadwal Pasien Kateterisasi Jantung Rumah Sakit Dustira</h2>
                            <p>Ajukan, Verifikasi, Lihat jadwal</p>
                        </Col>
                        <Col xs={3} md={3}>
                            <Link to="/ajukan">
                                <Button className="ajukan">
                                    <Glyphicon glyph="glyphicon glyphicon-upload" />
                                    <p>Ajukan Pasien</p>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row className="show-grid text-align-center">
                    <Col xs={12} md={8}>
                        <Link to="/ajukan">
                            <Button className="jadwal">
                                <Glyphicon glyph="glyphicon glyphicon-calendar" />
                                <p>Lihat Jadwal</p>
                            </Button>
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to="/statistik">
                            <Button className="statistik">
                                <Glyphicon glyph="glyphicon glyphicon-stats" />
                                <p>Lihat Statistik</p>
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;