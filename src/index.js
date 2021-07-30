import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ModArr from './H9.1-ModArr';
import Input from './H9.2-Two-sideBinding';
import { TimePicker } from './H9.3-useEffect'



ReactDOM.render(
  <React.StrictMode>
    <ModArr />
    <Input />
    <TimePicker value={1}/>
  </React.StrictMode>,
  document.getElementById('root')
);

