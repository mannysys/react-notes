/**
 * Created by shadow on 16/5/8.
 */



const List = require('./List');
const ReactDOM = require('react-dom');
const React = require('react');
const Dispatcher = require('./Dispatcher');

//中间件
//Dispatcher
//    .use(function log(action, next){
//        setTimeout(function(){
//            console.log('------log------', action.actionType);
//            next();
//        },2000);
//    }).use(function bzd(action, next){
//        setTimeout(function(){
//            console.log('------bzd------', action.actionType);
//            next();
//        },2000);
//    });

ReactDOM.render(<List/>, document.body);