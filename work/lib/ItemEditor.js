/**
 * Created by zhoujialin on 2016/5/4.
 */
//ItemEditor

const React = require('react');

const ItemEditor = React.createClass({
    //使用state生成一个默认的空对象
    getInitialState(){
        return {
            value:this.props.value
        }
    },
    changeHandle(event){
        this.state.value = event.target.value;
        this.forceUpdate();
        //使用setState和this.state.value、this.forceUpdate是一样的
        //this.setState是父对象自身方法
        //this.setState({
        //    value:event.target.value
        //});
    },
    remove(){
        //点击后调用该方法remove -> this.props.onRemove -> removeItem和removeEditor方法
        this.props.onRemove(this.props.id);

    },
    save(){
        this.props.onSave(this.props.id,this.state.value);
    },
    // this.state值是可写的
    render(){
        return <li className="list-group-item">
            {this.props.id}
            <input className="item-edit" onChange={this.changeHandle} value={this.state.value}/>
            <a className="glyphicon glyphicon-share" onClick={this.save} href="#"></a>
            <a className="glyphicon glyphicon-remove" onClick={this.remove} href="#"></a>
        </li>

    }
});

module.exports = ItemEditor;
