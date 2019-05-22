import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

export default class AddAppointments extends Component {
  
  constructor(){
    super();
    this.state = {
      petName:'',
      ownerName:'',
      aptDate:'',
      aptTime:'',
      aptNotes:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(e){
    e.preventDefault();
    let tempApt ={
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptDate: this.state.aptDate + ' ' + this.state.aptTime,
      aptNotes: this.state.aptNotes
    };

    this.props.addAppointment(tempApt);

    this.setState({
      petName:'',
      ownerName:'',
      aptDate:'',
      aptTime:'',
      aptNotes:''
    });
    this.props.toggleForm();
  }


  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className={
        'card textcenter mt-3 ' + (this.props.formDisplay ? '': 'add-appointment' )
        
      }>
      <div className="apt-addheading card-header bg-primary text-white" onClick={this.props.toggleForm}>
        <FaPlus/> Add a moment
      </div>

      <div className="card-body">
        <form id="aptForm" noValidate
        onSubmit={this.handleAdd}>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="petName"
              readOnly
            >
              Moment
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="petName"
                placeholder="Moment"
                value={this.state.petName}
                onChange={this.handleChange}

              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="ownerName"
            >
              Lead
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="ownerName"
                placeholder="Lead"
                value={this.state.petOwner}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptDate"
            >
              Start
            </label>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="aptDate"
                id="aptDate"
                value={this.state.petaptDate}
                onChange={this.handleChange}
              />
            </div>
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptTime"
            >
              Time
            </label>
            <div className="col-md-4">
              <input
                type="time"
                className="form-control"
                name="aptTime"
                id="aptTime"
                value={this.state.aptTime}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label className="col-md-2 text-md-right" htmlFor="aptNotes">
              Action/Engagement Plan
            </label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                rows="4"
                cols="50"
                name="aptNotes"
                id="aptNotes"
                placeholder="Action/Engagement Plan"
                value={this.state.aptNotes}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row mb-0">
            <div className="offset-md-2 col-md-10">
              <button
                type="submit"
                className="btn btn-primary d-block ml-auto"
              >
                Add Moment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

