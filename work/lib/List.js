/**
 * Created by zhoujialin on 2016/5/4.
 */

const React = require('react');
const Item = require('./Item');
const ItemEditor = require('./ItemEditor');

const List = React.createClass({
    //react自身内部方法(自身创建的时候就会调用,数据是可写的)
    getInitialState(){
        return {
            key:0,
            list:new Map(),
            editList:new Map()
        }
    },
    add(){ //添加按钮数据
        const key = ++this.state.key;
        this.state.editList.set(key,'');
        this.forceUpdate(); //更新页面数据，react自身方法
    },
    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();
    },
    removeEditor(id){
        this.state.editList.delete(id);
        this.forceUpdate();
    },
    save(id,value){
        this.state.editList.delete(id);
        this.state.list.set(id,value);
        this.forceUpdate();
    },
    edit(id,value){
        this.state.list.delete(id);
        this.state.editList.set(id,value);
        this.forceUpdate();
    },
    render(){

        const listDOM = [];
        const editListDOM = [];
        //this.state状态数据是内部自动调用到getInitialState初始化方法中数据
        for(let entity of this.state.list){
            // 这个key是自身API属性，不是自定义的
            listDOM.push(<Item id={entity[0]} key={entity[0]} onEdit={this.edit} onRemove={this.removeItem} value={entity[1]} />);
        }
        for(let entity of this.state.editList){
            editListDOM.push(<ItemEditor onSave={this.save} key={entity[0]} onRemove={this.removeEditor} id={entity[0]} value={entity[1]} />)
        }

        return <div>
            <button onClick={this.add} className="btn btn-default">Add</button>
            <ul className="list-group">
                {listDOM}
                {editListDOM}
            </ul>
        </div>

    }
});


module.exports = List;










