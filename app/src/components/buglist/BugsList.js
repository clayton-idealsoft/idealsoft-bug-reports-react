import React from 'react';
import axios from 'axios';

import  BugsListItem  from './BugsListItem'

const config = require("../../config");

export default class BugsList extends React.Component {
  state = {
    bugs: []
  }

  componentDidMount() {
    
    axios.get(config.api.url + `/api/bugs`)
      .then(res => {
        const bugs = res.data;
        this.setState({ bugs });
      })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>{this.props.bugid}</th>
            <th>{this.props.titulo}</th>
            <th>{this.props.data}</th>
            <th>{this.props.codigoUsuario} - {this.props.nomeUsuario}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.bugs.map(b => <BugsListItem item={b} />)}
        </tbody>
      </table>

    )
  }
} 