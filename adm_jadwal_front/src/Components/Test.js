import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-bootstrap/lib/Pagination';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Test extends Component {
    constructor(props) {
      super(props);
      let isi = Array.from(Array(150).keys()).map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
      
      this.state = {
        value: ['asep'],
        date: new Date(),
        nama: '',
        active: 1, 
        data: isi,
        itemna : 0
      };
      this.ActivePagi = this.ActivePagi.bind(this);
      this.Next = this.Next.bind(this);
      this.Prev = this.Prev.bind(this);
      this.EllipsisNext = this.EllipsisNext.bind(this);
      this.EllipsisPrev = this.EllipsisPrev.bind(this);
      this.NextLass = this.NextLass.bind(this);
      this.PrevFirst = this.PrevFirst.bind(this);
    }

    ChangeNama = (e) => {
      this.setState({nama : e.target.value})
    }
    ChangeNamaButton = (namabaru) => {
      this.setState ({nama : namabaru})
    }
    
    ActivePagi(event) {
        event.preventDefault();
        this.setState({
          active: Number(event.target.id)
        })
        this.NextMax();
      }

      // ISI jumlah load untuk mengatur data yang akan di load
      JmlNumb = () => {
        let jumlahLoad = 10
        let jml = this.state.data.length / jumlahLoad 
        let sisa = this.state.data.length % jumlahLoad
        if (sisa >=1) {
          return jml + 1
        } else {
          return jml
        }
      }

    NextMax() {
      if(this.state.active >= this.JmlNumb() ) {
        return true
      }else if(this.state.active < 15) {
        return false
      } else {
        alert('error next button')
      }
    }
    NextLass() {
        this.setState({active: this.JmlNumb()})
        this.setState({itemna: this.JmlNumb() - 5})
    }
    NextRoll() {
      if(this.state.active > 2 && this.state.active - this.state.itemna === 5 || this.state.itemna - this.state.active >= 1) {
        if(this.state.active - 4 <0) {
          this.setState({
            itemna: 0
          })
        }else{
          this.setState({
            itemna: this.state.active - 4
          })
        }
      }
    }
    Next() {
        if(this.NextMax() === false){
          this.setState({
            active: this.state.active+1
          })
          this.NextRoll();
        }
    }
    EllipsisNext() {
      if( this.state.itemna + 5 > this.JmlNumb() - 5 ) {
        this.setState({
          itemna: this.JmlNumb() - 5
        })  
      }else {
        this.setState({
          itemna: this.state.itemna + 5
        })
      }
    }


    PrevRoll() {
      if(this.state.active <= this.JmlNumb() - 4 && this.state.active - this.state.itemna === 1 || this.state.active - this.state.itemna >= 7 ) {
        if(this.state.active - 2 >= this.JmlNumb() - 5 ) {
          this.setState({
            itemna: this.JmlNumb() - 5
          })
        }else {
          this.setState({
            itemna: this.state.active - 2
          })
        }
      }
    }
    PrevFirst() {
      this.setState({active: 1})
      this.setState({itemna: 0})
    }
    EllipsisPrev() {
      if (this.state.itemna - 5 < 0) {
        this.setState({
          itemna: 0
        })
      }else {
        this.setState({
        itemna: this.state.itemna - 5
       })
      }
    }
    PrevMin() {
      if(this.state.active <= 1 ) {
        return true
      }else if(this.state.active > 1) {
        return false
      } else {
        alert('error next button')
      }
    }
    Prev() {
      if(this.PrevMin() === false){
        this.setState({
          active: this.state.active-1
        })
        this.PrevRoll()
      }
    }
    
    style = {
      width : '500px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }

    render() {
        // tampil data
        // ISI jumlah load untuk mengatur data yang akan di load
        let jumlahLoad = 10
        let filteran = this.state.data.filter((saring, i) => {
        
        let akhir = this.state.active * jumlahLoad
        let awal = akhir - jumlahLoad
        if(this.state.active === 1) {
            return i < this.state.active * jumlahLoad
          } else if(this.state.active > 1) {
            return i >= awal && i < akhir
          }else {
            console.error('error');
            
          }
       });

      // tombol paginasi
      let JmlNumb = () => {
        let jml = Math.floor(this.state.data.length / jumlahLoad) 
        // iyeu teh kan isina 7
        let sisa = this.state.data.length % jumlahLoad
        if (sisa >=1) {
          return jml + 1
          // ku urang tambahan 1
        } else {
          return jml
        }
      }
   
      let filteritem = [];
      for (let number = 1; number <= JmlNumb(); number++) {
        filteritem.push(
          <Pagination.Item active={number === this.state.active} id={number} onClick={this.ActivePagi}>{number}</Pagination.Item>
        )
      }

      let hideElNext = false;
      let hideElPrev = true;
      let itemAwal = this.state.itemna
      let itemAkhir = itemAwal + 5
      let items = filteritem.filter((data, i) => {
          if (itemAkhir <= JmlNumb()) {
            if(itemAkhir >= JmlNumb()) {
              hideElNext = true;
            }else if(itemAkhir <= 5) {
              hideElPrev = false;
            }
            return i >= itemAwal && i < itemAkhir
          } else {
            return alert('error')
          }
        }
      )

      return (
        <Grid>
          <Row className="show-grid">
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
              <Link to="/"><a href='/' style={{color: "black"}}>Home</a></Link>
              
              {filteran.map(item =>
                  <div key={item.id}>{item.name}</div>
              )}
              <Col xs={6} md={12}>
              <Pagination bsSize="small">
                <Pagination.First disabled={this.PrevMin()} onClick={this.PrevFirst} />
                <Pagination.Prev disabled={this.PrevMin()} onClick={this.Prev}/>
                {hideElPrev === true ? <Pagination.Item onClick={this.PrevFirst}>{1}</Pagination.Item> : '' }
                {hideElPrev === true ? <Pagination.Ellipsis onClick={this.EllipsisPrev} /> : '' }
                  {items}
                {hideElNext === false ? <Pagination.Ellipsis onClick={this.EllipsisNext} /> : '' }
                {hideElNext === false ? <Pagination.Item onClick={this.NextLass}>{Number(JmlNumb())}</Pagination.Item> : '' }
                <Pagination.Next disabled={this.NextMax()} onClick={this.Next}/>
                <Pagination.Last disabled={this.NextMax()} onClick={this.NextLass} />         
              </Pagination>
              
              <p>{itemAkhir}</p>
              <p>state aktif {this.state.active}</p>
              <p>state itemna {this.state.itemna}</p>
              <p>{this.state.itemna - this.state.active}</p>
              </Col>
          </Row>
        </Grid>
      );
    }
  }