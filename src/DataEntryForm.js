import React, { Component } from 'react'

export default class DataEntryForm extends Component {

    provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             name: '',
             address1: '',
             address2: '',
             city: '',
             province: '',
             postalCode: ''
        }
    }

    readData = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitData = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <fieldset>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.submitData}>
                    <label>Email</label>
                    <input name="email" placeholder="Enter Email" type="text" onChange={this.readData}/>
                    <label>Name</label>
                    <input name="name" placeholder="Full Name" type="text" onChange={this.readData}/>
                    <br/>
                    <label>Address 1</label>
                    <input name="address1" placeholder="1234 Main St" type="text" onChange={this.readData}/>
                    <br/>
                    <label>Address 2</label>
                    <input name="address2" placeholder="Apartment, studio or floor" type="text" onChange={this.readData}/>
                    <br/>
                    <label>City</label>
                    <input name="city" placeholder="Toronto" type="text" onChange={this.readData}/>
                    <label>Province</label>
                    <select name="province">
                        <option value="">Choose...</option>
                        {
                            this.provinces.map(name => (
                                <option key={name}>{name}</option>
                            ))
                        }
                    </select>
                    <label>Postal Code</label>
                    <input name="postalCode" placeholder="D3R 8W5" type="text" onChange={this.readData}/>
                    <br/>
                    
                    
                    <button type="submit" onClick={this.submitData}>Submit</button>
                </form>

                <div>
                    <h3>Email: {this.state.email}</h3>
                    <h3>Full Name: {this.state.name}</h3>
                    <h3>Address: {this.state.address1} {this.state.address2}</h3>
                    <h3>City: {this.state.city}</h3>
                    <h3>Province: {this.state.province}</h3>
                    <h3>Postal Code: {this.state.postalCode}</h3>
                </div>
            </fieldset>
        )
    }
}
// <input type="submit" value="Submit"/>