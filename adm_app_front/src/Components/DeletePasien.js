import React, { Component } from 'react';
import axios from 'axios';

class DeletePasien extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      rm: '',
    };
  }

  handleRmChange = event => {
      this.setState({ rm: event.target.value });
  };
  
  handleSubmit = event => {
      event.preventDefault();     
      
       axios.delete(`http://localhost:4000/api/pasien/${this.state.rm}`)
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
            <button>hapus</button>
        </form>
    </div>
    );
  }  
}

export default DeletePasien;