import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';
import menuItem from './menuItem';

export default props => (
    <ul className="sidebar-menu" >
        <MenuItem path="#/" label="dashboard" icon="dashboard"></MenuItem>

        <MenuTree label="Cadastro" icon="edit">
            <MenuItem  path='#billingCycles'
                label="Ciclo de pagamentos" icon="usd"></MenuItem>
        </MenuTree>
    </ul>
)