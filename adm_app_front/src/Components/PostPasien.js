import React, { Component } from 'react';
import axios from 'axios';

class PostPasien extends Component {
  constructor() {
    super();
  
    this.state = {
      rm: '',
      nama: '',
      filegambar: null,
    };
  }

  handleRmChange = event => {
      this.setState({ rm: event.target.value });
  };
  
  handleNameChange = event => {
    this.setState({ nama: event.target.value });
  };
  
  handlePictureChange = event => {
    this.setState({ filegambar: event.target.files[0] });
  }


  handleSubmit = event => {
      event.preventDefault();     
      
       axios.post('http://localhost:4000/api/pasien', {rm: this.state.rm, nama: this.state.nama})
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
                <input type="text" name="rm" onChange={this.handleRmChange} />
            </label>
            <label>
                Nama :
                <input type="text" name="nama" onChange={this.handleNameChange} />
            </label>
            <button>tambah</button>
        </form>
      </div>
    );
  }  
}

export default PostPasien;