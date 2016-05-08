/**
 * Created by shadow on 16/5/8.
 */

//继承react中的事件产生器
const EventEmitter = require('events').EventEmitter;


// Store做为数据的提供者
class Store extends EventEmitter{

    constructor(){
        super();
        this._list = [];

    }

    //做为私有的方法(外部不能找到该方法)
    _add(item){
        this._list.push(item);
        // 抛出一个触发change事件
        this.emit("change", this.list);
    }

    get list(){
        return this._list;

    }



}


module.exports = Store;