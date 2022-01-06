import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app.comp';

import {GlobalStyles, LayoutStyles, TypographyStyles} from './common';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <TypographyStyles />
    <LayoutStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)