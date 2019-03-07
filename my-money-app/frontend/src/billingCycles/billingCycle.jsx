import React, {Component} from 'react';

import ContentHead from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tab';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHead from '../common/tab/tabHeader';

export default class BillingCycles extends Component{

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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>  
        )
    }

}
