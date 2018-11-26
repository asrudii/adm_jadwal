import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Grid, Row, Col } from 'react-bootstrap';

class Statistik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statistikData : {
                labels : [ 'Dinas', 'BPJS Mandiri', 'Jamkesmas', 'Polri', 'Kontraktor'],
                datasets : [{
                    label : 'population',
                    data : [617594, 381045, 653060, 406519, 505162],
                    backgroundColor :[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]                
            }
        }
    }
    
    render() {
        return (
            <Grid>
                <Row>
                <Col sm={18} md={12}>
                    <Bar
                        data={this.state.statistikData}
                        options={{ 
                            title : {
                                display : true,
                                text : 'Statistik Pasien Cathlab',
                                position : 'top', 
                                fontSize : 20
                            },
                            legend : {
                                display : true,
                                position : 'bottom'
                            }
                        }}
                    />
                </Col>
                </Row>
            </Grid>
        );
    }
}

export default Statistik;