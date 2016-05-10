/**
 * Created by shadow on 16/5/8.
 */

//继承react中的事件产生器
const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('./Dispatcher');

// Store做为数据的提供者
class Store extends EventEmitter{

    constructor(){
        super();
        this._list = [];

        Dispatcher.register(action=>{
            switch(action.actionType){
                case 'add':
                    this._add(action.name);
                    break;
                case 'getAll':
                    this._list = action.list;
                    this.emit("change", this.list);
                    break;
            }
        });

    }

    //做为私有的方法(外部不能找到该方法)
    _add(item){
        //改变自身的数据，并抛出事件，List类中接收事件并处理更新react内部状态渲染ui
        this._list.push(item);
        // 抛出一个触发change事件，携带数据
        this.emit("change", this.list);
    }

    //获取_list数组中数据
    get list(){
        return this._list;
    }



}


module.exports = Store;