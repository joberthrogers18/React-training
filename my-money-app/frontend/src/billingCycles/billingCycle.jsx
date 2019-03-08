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


import { selectTab, showTabs } from '../common/tab/tabAction';

class BillingCycles extends Component{

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate');
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
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>  
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators( {selectTab, showTabs} , dispatch);

export default connect(null, mapDispatchToProps)(BillingCycles);