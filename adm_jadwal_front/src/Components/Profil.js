import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Table } from 'react-bootstrap';

class Profil extends Component {
    constructor() {
        super();
        this.state = {
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
    }

    render() {
        return (
            <div>
                <Table responsive xs={8} md={6} >
                    <thead>
                        <tr>
                            <th>username</th>
                            <th>email</th>
                            <th>nama</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.username}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.nama}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Profil;
