import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home';
import Jadwal from './Components/Jadwal';
import ListVerifikasi from './Components/ListVerifikasi';
import Ajukan from './Components/Ajukan';
import Statistik from './Components/Statistik';
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import NavbarCustom from './Components/NavbarCustom';
import GetPasien from './Components/GetPasien';
import PostPasien from './Components/PostPasien';
import PutPasien from './Components/PutPasien';
import DeletePasien from './Components/DeletePasien';
import Test from './Components/Test';
import Todo from './Components/Todo';
import Upload from './Components/Upload';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarCustom />
          <Route exact path='/' component={Home} />
          <Route exact path='/jadwal' component={Jadwal} />
          <Route exact path='/verifikasi' component={ListVerifikasi} />
          <Route exact path='/ajukan' component={Ajukan} />
          <Route exact path='/statistik' component={Statistik} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profil' component={Profil} />
          <Route path='/edit' component={PutPasien} />
          <Route path='/hapus' component={DeletePasien} />
          <Route path='/submit' component={PostPasien} />
          <Route path='/test' component={Test} />
          <Route path='/todo' component={Todo} />
          <Route path='/upload' component={Upload} />
          <Route path='/lihat' component={GetPasien} />
        </div>
      </Router>
    );
  }  
}

export default App;
