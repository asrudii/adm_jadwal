import React, { Component } from 'react';

export default class Upload extends Component {

    render() {
      return (
        <div>
          <form action='localhost:4000/api/upoad' method='POST' encType='multipart/form-data'>
            <input type='file' name='file' />
            <input type='submit' value='submit' />
          </form>
        </div>
      );
    }
  }