import React, { Component } from 'react'

export default class DataEntryForm extends Component {

    provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", 
        "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]

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

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <fieldset>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>Email</label>
                    <input name="email" placeholder="Enter Email" type="text" onChange={this.handleChange}/>
                    <label>Name</label>
                    <input name="name" placeholder="Full Name" type="text" onChange={this.handleChange}/>
                    <br/>
                    <label>Address 1</label>
                    <br/>
                    <input name="address1" placeholder="160 Bloor St" type="text" onChange={this.handleChange}/>
                    <br/>
                    <label>Address 2</label>
                    <br/>
                    <input name="address2" placeholder="House or Condo" type="text" onChange={this.handleChange}/>
                    <br/>
                    <label>City</label>
                    <input name="city" placeholder="Toronto" type="text" onChange={this.handleChange}/>
                    <label>Province</label>
                    <select name="province">
                        <option value="">Select a Province</option>
                        {
                            this.provinces.map(name => (
                                <option key={name}>{name}</option>
                            ))
                        }
                    </select>
                    <label>Postal Code</label>
                    <input name="postalCode" placeholder="M3T 1A8" type="text" onChange={this.handleChange}/>
                    <br/>
                    
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>

                <div>
                    <p>Email: {this.state.email}</p>
                    <p>Full Name: {this.state.name}</p>
                    <p>Address: {this.state.address1} {this.state.address2}</p>
                    <p>City: {this.state.city}</p>
                    <p>Province: {this.state.province}</p>
                    <p>Postal Code: {this.state.postalCode}</p>
                </div>
            </fieldset>
        )
    }
}
