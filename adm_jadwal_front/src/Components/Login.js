import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button, Grid, Row, Col } from 'react-bootstrap';
import './LoginRegister.css'

class Login extends Component {
  constructor() {
    super();
  
    this.state = {
      email: '',
      password: '',
      formatemail: 'format email nama@domain.com',
      logingagal: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };
  

  handleSubmit = event => {
      event.preventDefault();     
      
      // const login = () => {
      //   return
         axios.post('http://localhost:4000/api/login', {email: this.state.email, password: this.state.password})
         .then(res => {
            if(res.data === 'user tidak ditemukan'){
              this.setState({
                logingagal : 'email atau password salah'
              })
            }else {
              localStorage.setItem('usertoken', res.data)
              return res.data
            }
          })
          .then(d => {
            if(localStorage.usertoken != undefined) {           
              this.props.history.push('/profil')
            }
          })
          .catch(err => console.log(err))
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
                  <h2 className="loginRegisterLabel"> LOGIN </h2>  
                  <p style={{color: 'red', textAlign: 'center'}}>{this.state.logingagal}</p>                     
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
                  <Button bsStyle="success" bsSize="large" type="submit" block>Login</Button>
              </Col>
          </Form>
        </Row>
      </Grid>
    );
  }  
}

export default Login;