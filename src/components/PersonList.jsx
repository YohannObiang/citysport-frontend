import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/chaussures`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
     
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.nom_chaussure}</li>)}
        hhhh
      </ul>
    )
  }
}