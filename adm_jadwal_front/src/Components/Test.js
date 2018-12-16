import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ['asep'],
        date: new Date(),
        nama: '',
      };
    }

    ChangeNama = (e) => {
      this.setState({nama : e.target.value})
    }
    ChangeNamaButton = (namabaru) => {
      this.setState ({nama : namabaru})
    }

    render() {
      return (
        <div>
          <input type='text' onChange={this.ChangeNama} />
          {/* bind */}
          <button onClick={this.ChangeNamaButton.bind(this, 'Asep Rudi Luqmanul Hakim')} > Nama lengkap </button>
          {/* function */}
          <button onClick={() => this.ChangeNamaButton('Udi') } > Nama panggilan </button>
          <p>{this.state.nama}</p>
          <button className="square" onClick={() => alert('click')}>
            {this.state.value}
          </button>
          <p>{this.state.date.toLocaleTimeString()}</p>
          <Link to="/"><a href='/'>Home</a></Link>
        </div>
      );
    }
  }