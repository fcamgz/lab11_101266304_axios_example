import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component{
    constructor(props){
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=10')
        .then(res => {
            console.log(res.data.results);
            const persons = res.data.results;
            this.setState({persons});
        });
    }
    
    render(){
        return(
            <div>
                <h1 className='title m-4'>PersonList</h1>
                {this.state.persons.map((person) => (
                    <div className='border border-primary p-5 mb-4 row' key={person.id.value}>
                        <div className='col-sm-4'>
                            <img className='border border-secondary' alt='' src={person.picture.large}/>
                        </div>
                        <div className='col-sm-6'>
                            <h3>First Name: {person.name.first}</h3>
                            <h3>Last Name: {person.name.last}</h3>
                            <h5>Gender: {person.gender}</h5>
                            <h5>City: {person.location.city}</h5>
                            <h5>Phone: {person.phone}</h5>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default PersonList;