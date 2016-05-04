/**
 * Created by zhoujialin on 2016/5/4.
 */


// 组件模块化

const ReactDOM = require('react-dom');
const React = require('react');
const List = require('./lib/List');

ReactDOM.render(
    <List/>,
    document.getElementById('test')
);