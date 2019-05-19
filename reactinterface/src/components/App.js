import React , { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      myName: 'Komlan',
      myAppointements : []
    }
  }

  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
        const apts = result.map(item => {
        return item;
      })
      this.setState({
        myAppointements: apts
     });
    });
    
  }
  render() {
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {this.state.myName}
              <AddAppointments />
              <ListAppointments />
              <SearchAppointments />            
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
