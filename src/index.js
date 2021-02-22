import React from 'react';
import { render } from 'react-dom';

import App from './app/layout/App';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

// import HomepageLayout from './app/layout/HomepageLayout';

const rootEl = document.getElementById('root');

render(<App />, rootEl);
