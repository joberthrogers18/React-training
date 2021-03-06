import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';  

import ContentHead from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tab';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHead from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import List from './billingCycleList';
import Form from './biilingCycleForm';


import { create, update, remove, init } from './billingCyclesAction';

class BillingCycles extends Component{

    componentWillMount(){
        this.props.init()
    }

    render(){
        return(
            <div>
                <ContentHead title='Ciclo de pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHead label='Listar' icon='bars'  target='tabList'/>
                            <TabHead label='Incluir' icon='plus' target='tabCreate' />
                            <TabHead label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHead label='Exclur' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} 
                                        submitClass='primary' submitLabel='Incluir'/> {/* When the form is submit, will call the method "create" in action creators billingcycle*/}
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}
                                        submitClass='info' submitLabel='Alterar'/> {/* When the form is submit, will call the method "update" in action creators billingcycle*/}
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                      submitClass='danger' submitLabel='Excluir'/> {/* When the form is submit, will call the method "remove" in action creators billingcycle*/}
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>  
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators( {create, update, remove, init} , dispatch);

export default connect(null, mapDispatchToProps)(BillingCycles);