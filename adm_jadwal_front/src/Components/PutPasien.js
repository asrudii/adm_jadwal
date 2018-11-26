import React, { Component } from 'react';
import axios from 'axios';

class PutPasien extends Component {
  constructor() {
    super();
  
    this.state = {
      rm: 0,
      nama: '',
    };
  }

  handleRmChange = event => {
      this.setState({ rm: event.target.value });
  };
  
  handleNameChange = event => {
    this.setState({ nama: event.target.value });
};


  handleSubmit = event => {
      event.preventDefault();     
      console.log(this.state.rm);
       axios.put(`http://localhost:4000/api/pasien/${this.state.rm}`, {nama: this.state.nama})
       .then(res => {
           console.log(res);
           console.log(res.data);
        })
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <label>
                RM :
                <input type="number" name="rm" onChange={this.handleRmChange} />
            </label>
            <label>
                Nama :
                <input type="text" name="nama" onChange={this.handleNameChange} />
            </label>
            <button>Edit</button>
        </form>
      </div>
    );
  }  
}

export default PutPasien;