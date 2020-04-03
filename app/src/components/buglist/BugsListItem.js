import React from 'react';

export default class BugsListItem extends React.Component {    
    render() {
        return (
            <tr>
                <td>{this.props.item.bugid}</td>
                <td>{this.props.item.titulo}</td> 
                <td>{this.props.item.data}</td>
                <td>{this.props.item.codigoUsuario} - {this.props.item.nomeUsuario}</td>
            </tr>
        )
    }
}