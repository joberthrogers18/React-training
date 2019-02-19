import React from 'react';
import ReactDOM from 'react-dom';
import First ,{Second} from './component'; // "First" is out for keys because it's export by default

ReactDOM.render(
    <div>
        <First/>
        <Second/>
    </div>
    , document.getElementById('app'));

