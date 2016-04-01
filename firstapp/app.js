/**
 * Created by zhoujialin on 2016/3/14.
 */


/*
   React.createClass创建类相当于一个标签

   this.props.value获取到组件内定义的value值<Item value='abc'/>
   this.props.children 可以获取到Item组件内子元素
   input标签内容定义value={this.props.value} 是固化了不能更改的,defaultValue={this.props.value}是可以更改的

   props是父对象上一级传过的值是不可变的只读的
*/

//Item
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

//ItemEditor
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

//List
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

ReactDOM.render(
    <List/>,
    document.getElementById('test')
)





































