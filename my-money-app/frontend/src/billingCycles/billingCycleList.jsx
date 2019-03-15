import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { getList, showUpdate } from './billingCyclesAction';

class BillingCycleList extends Component{

    constructor(props){
        super(props);

        this.renderRows = this.renderRows.bind(this);
    }

    componentWillMount(){
        this.props.getList();
    }

    renderRows(){
       const list =  this.props.list || []

        return list.map(bc => (
            <tr key={bc._id}>
               <td>{bc.name}</td>
               <td>{bc.month}</td>
               <td>{bc.year}</td>
               <td>
                   <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                   </button>
               </td>
           </tr>
        ))

    }

    render(){

        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list : state.billingCycles.list });

const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);