import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button, Grid, Row, Col } from 'react-bootstrap';
import './LoginRegister.css'

class Register extends Component {
  constructor() {
    super();
  
    this.state = {
      username: '',
      nama: '',
      email: '',
      password: ''
    };
  }

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSubmit = event => {
      event.preventDefault();     
      
       axios.post('http://localhost:4000/api/register', {
           username: this.state.username, 
           nama: this.state.nama,
           email: this.state.email,
           password: this.state.password
        })
       .then(res => {
           console.log('registered');
        })
        .then( d => {
            this.props.history.push('/login')
        })
        .catch(err => console.log(err))
        
        alert('Anda berhasil register');
        this.setState({
            username: '',
            nama: '',
            email: '',
            password: ''
        });
  }

  validasiemail(e) {
    const email = this.state.email;
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( email.length < 3) {
      return true;
    } else if (reg.test(String(email).toLowerCase())) {
      return 'success';
    } else {
      return 'error';
    }
  }

  render() {
    return (
        <Grid>
        <Row className="show-grid">
          <Form onSubmit={this.handleSubmit}>
              <Col sm={12} md={4} mdOffset={4}> 
                  <h2 className="loginRegisterLabel"> REGISTER </h2>                       
                  <FormGroup controlId="formBasicText">
                      <ControlLabel> username</ControlLabel>
                      <FormControl type="text" placeholder="Masukkan username" value={this.state.username} name="username"  onChange={this.handleChange}/>
                      <FormControl.Feedback />
                      <HelpBlock>username wajib diisi</HelpBlock>
                  </FormGroup>
                  <FormGroup controlId="formBasicText">
                      <ControlLabel> nama </ControlLabel>
                      <FormControl type="text" placeholder="Masukkan nama" value={this.state.nama} name="nama"  onChange={this.handleChange}/>
                      <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup controlId="formBasicText" validationState={this.validasiemail()}>
                      <ControlLabel> email</ControlLabel>
                      <FormControl type="text" placeholder="Masukkan email" value={this.state.email} name="email"  onChange={this.handleChange}/>
                      <FormControl.Feedback />
                      <HelpBlock name="formatemail">{this.state.formatemail}</HelpBlock>
                  </FormGroup>
                  <FormGroup controlId="formBasicPassword" >
                      <ControlLabel> password</ControlLabel>
                      <FormControl type="password" placeholder="Masukkan password" value={this.state.password} name="password"  onChange={this.handleChange}/>
                      <HelpBlock>masukkan password anda</HelpBlock>
                  </FormGroup>
                  <Button bsStyle="success" bsSize="large" type="submit" block>Register</Button>
              </Col>
          </Form>
        </Row>
      </Grid>
    );
  }  
}

export default Register;