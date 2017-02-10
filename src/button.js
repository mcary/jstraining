import 'babel-polyfill';

// copy index.html to the build directory
require('file?name=[name].[ext]!../index.html');

import ReactDOM from 'react-dom';
import React from 'react';
import ThreeStateButton from 'ThreeStateButton';


ReactDOM.render(
  <ThreeStateButton value={1} />,
  document.getElementById('button')
);
