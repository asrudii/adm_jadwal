import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Grid, Row, Col } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Statistik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statistikData : {
                labels : [ 'Jml Pasien', 'BPJS Mandiri', 'Jamkesmas', 'Polri', 'Kontraktor'],
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
            },
            pasien: '',         
            username: '',
            nama: '',
            email: ''
            
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
                nama: decode.nama,
                email: decode.email
            })
            
        }
        
        this.getPasien(); 
        
        // this.setState({
        //     statistikData: {
        //         ...this.state.statistikData,
        //         this.state.statistikData.datasets[0].data = [64, 38, 65, 40, 52]
                
        //     },
        //     pasien: ['rudi', 'asep', 'lukman']
        // })
              
    }

    getPasien = _ => {
        axios.get('http://localhost:4000/api/pasien')
            .then(result => {
                this.setState({ 
                pasien : result.data,
            })
                let jml_pasien = result.data.length;
                this.state.statistikData.datasets[0].data = [jml_pasien, 18, 20, 18, 19]
                this.forceUpdate();
        })
            .catch(err => console.log(err))
    }

    

    // bindData = d => {
    //     this.setState({statistikData.data.datasets[0].data[7] = 60;)}
    //     update();
    // }

    render() {
        // console.log(this.state.statistikData.datasets[0].data)   
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

export default withRouter(Statistik);