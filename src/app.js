import 'babel-polyfill';

// copy index.html to the build directory
require('file?name=[name].[ext]!../index.html');

import ReactDOM from 'react-dom';
import React from 'react';
import Animals from 'Animals';
import button from 'button';


const animals = [{
    'type': 'elephant',
    'name': 'Zazo',
    'color': 'grey',
    'gender': 'male'
  },
  {
    'type': 'dog',
    'name': 'Fluffy',
    'color': 'white',
    'gender': 'female',
  },
  {
    'type': 'cat',
    'name': 'Muffin',
    'color': 'grey',
    'gender': 'male'
  }];

ReactDOM.render(
  <Animals animals={animals} />,
  document.getElementById('root')
);

