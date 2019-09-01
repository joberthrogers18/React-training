import React, {Component} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { fetchAllResponsables } from './showActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './styles.css';

class Show extends Component{

  componentDidMount(){
    this.props.fetchAllResponsables();
  }


  render (){

    return (
        <div className="list">
          <header className="title">
            <h1>Responsáveis</h1>
          </header> 
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>CPF</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">Idade</TableCell>
                  <TableCell align="right">CNH</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.responsable.map(row => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.cpf}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.cnh}</TableCell>
                    <TableCell align="right">{row.cnh}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    responsable: state.responsable.resp
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAllResponsables}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);