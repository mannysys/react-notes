/**
 * Created by zhoujialin on 2016/5/4.
 */

const React = require('react');

const Item = React.createClass({
    // this.props.onEdit 是一个 function
    edit(){
        this.props.onEdit(this.props.id,this.props.value);
    },
    remove(){
        this.props.onRemove(this.props.id);
    },
    render(){
        return <li className="list-group-item">
            {this.props.value}
            <a className="right glyphicon glyphicon-edit" href="#" onClick={this.edit}></a>
            <a className="right glyphicon glyphicon-remove" href="#" onClick={this.remove}></a>
        </li>
    }
});

//模块化
//将该组件暴露出去(在其它文件里就可以导入)
module.exports = Item;












