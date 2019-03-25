import React from 'react';
import reactDom from 'react-dom';
import TodoList from './TodoList';
import './Style/index.css';

var destination = document.querySelector('#container');

reactDom.render(<TodoList />, destination);
